/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Nullable } from '@univerjs/core';
import { ICommandService, RxDisposable } from '@univerjs/core';
import type {
    IDocSelectionInnerParam,
    IRectRangeWithStyle,
    ISuccinctDocRangeParam,
    ITextRangeWithStyle,
} from '@univerjs/engine-render';
import { NORMAL_TEXT_SELECTION_PLUGIN_STYLE } from '@univerjs/engine-render';
import { BehaviorSubject } from 'rxjs';
import { SetTextSelectionsOperation } from '../commands/operations/text-selection.operation';

interface IDocSelectionManagerSearchParam {
    unitId: string;
    subUnitId: string;
}

export interface IRefreshSelectionParam extends IDocSelectionManagerSearchParam {
    docRanges: ISuccinctDocRangeParam[];
    isEditing: boolean;
    options?: {
        [key: string]: boolean;
    };
}

interface ITextSelectionManagerInsertParam extends IDocSelectionManagerSearchParam, IDocSelectionInnerParam {}

type ITextSelectionInfo = Map<string, Map<string, IDocSelectionInnerParam>>;

/**
 * This service is for text selection.
 */
export class DocSelectionManagerService extends RxDisposable {
    private _currentSelection: Nullable<IDocSelectionManagerSearchParam> = null;

    private readonly _textSelectionInfo: ITextSelectionInfo = new Map();

    private readonly _textSelection$ = new BehaviorSubject<Nullable<ITextSelectionManagerInsertParam>>(null);
    readonly textSelection$ = this._textSelection$.asObservable();

    private readonly _refreshSelection$ = new BehaviorSubject<Nullable<IRefreshSelectionParam>>(null);
    readonly refreshSelection$ = this._refreshSelection$.asObservable();

    constructor(
        @ICommandService private readonly _commandService: ICommandService
    ) {
        super();
    }

    getCurrentSelection() {
        return this._currentSelection;
    }

    // Get textRanges, style, segmentId
    /**
     * @deprecated
     */
    getCurrentSelectionInfo() {
        return this._getTextRanges(this._currentSelection);
    }

    refreshSelection() {
        if (this._currentSelection == null) {
            return;
        }

        this._refresh(this._currentSelection);
    }

    // **Only used in test case** because this does not go through the render layer.
    setCurrentSelection(param: IDocSelectionManagerSearchParam) {
        this._currentSelection = param;

        this._refresh(param);
    }

    setCurrentSelectionNotRefresh(param: IDocSelectionManagerSearchParam) {
        const { unitId, subUnitId } = this._currentSelection ?? {};
        const { unitId: newUnitId, subUnitId: newSubUnitId } = param;

        if (unitId !== newUnitId || subUnitId !== newSubUnitId) {
            if (unitId && subUnitId) {
                this._refreshSelection$.next({
                    unitId,
                    subUnitId,
                    docRanges: [],
                    isEditing: false,
                });
            }

            this._currentSelection = param;
        }
    }

    getCurrentTextRanges(): Readonly<Nullable<ITextRangeWithStyle[]>> {
        return this._getTextRanges(this._currentSelection)?.textRanges;
    }

    getCurrentRectRanges(): Readonly<Nullable<IRectRangeWithStyle[]>> {
        return this._getTextRanges(this._currentSelection)?.rectRanges;
    }

    getDocRanges() {
        const textRanges = this.getCurrentTextRanges() ?? [];
        const rectRanges = this.getCurrentRectRanges() ?? [];
        // Sort ranges by startOffset in ascending order.
        const allRanges = [...textRanges, ...rectRanges]
            .filter((range) => range.startOffset != null && range.endOffset != null)
            .sort((a, b) => {
                if (a.startOffset! > b.startOffset!) {
                    return 1;
                } else if (a.startOffset! < b.startOffset!) {
                    return -1;
                } else {
                    return 0;
                }
            });

        return allRanges;
    }

    getActiveTextRange(): Nullable<ITextRangeWithStyle> {
        const selectionInfo = this._getTextRanges(this._currentSelection);
        if (selectionInfo == null) {
            return;
        }

        const { textRanges } = selectionInfo;

        return textRanges.find((textRange) => textRange.isActive);
    }

    /**
     *
     * @deprecated
     */
    getActiveRectRange(): Nullable<ITextRangeWithStyle> {
        const selectionInfo = this._getTextRanges(this._currentSelection);
        if (selectionInfo == null) {
            return;
        }

        const { rectRanges } = selectionInfo;
        return rectRanges.find((rectRange) => rectRange.isActive);
    }

    // **Only used in test case** because this does not go through the render layer.
    add(textRanges: ITextRangeWithStyle[], isEditing = true) {
        if (this._currentSelection == null) {
            return;
        }

        this._addByParam({
            ...this._currentSelection,
            textRanges,
            rectRanges: [],
            segmentId: '',
            segmentPage: -1,
            isEditing,
            style: NORMAL_TEXT_SELECTION_PLUGIN_STYLE, // mock style.
        });
    }

    replaceTextRanges(docRanges: ISuccinctDocRangeParam[], isEditing = true, options?: { [key: string]: boolean }) {
        if (this._currentSelection == null) {
            return;
        }

        // Remove all textRanges.
        // Add new textRanges.

        const { unitId, subUnitId } = this._currentSelection;

        this._refreshSelection$.next({
            unitId,
            subUnitId,
            docRanges,
            isEditing,
            options,
        });
    }

    replaceTextRangesWithNoRefresh(textSelectionInfo: IDocSelectionInnerParam) {
        if (this._currentSelection == null) {
            return;
        }

        const params = {
            ...this._currentSelection,
            ...textSelectionInfo,
        };

        // Store the textSelectionInfo.
        this._replaceByParam(params);

        // Broadcast textSelection changes, this should be used within the application.
        this._textSelection$.next(params);

        const { unitId, subUnitId, segmentId, style, textRanges, rectRanges, isEditing } = params;

        const ranges = [...textRanges, ...rectRanges]
            .filter((range) => range.startOffset != null && range.endOffset != null)
            .sort((a, b) => {
                if (a.startOffset! > b.startOffset!) {
                    return 1;
                } else if (a.startOffset! < b.startOffset!) {
                    return -1;
                } else {
                    return 0;
                }
            });

        // For menu status.
        this._commandService.executeCommand(SetTextSelectionsOperation.id, {
            unitId,
            subUnitId,
            segmentId,
            style,
            isEditing,
            ranges,
        });
    }

    override dispose(): void {
        this._textSelection$.complete();
    }

    private _getTextRanges(param: Nullable<IDocSelectionManagerSearchParam>) {
        if (param == null) {
            return;
        }

        const { unitId, subUnitId = '' } = param;

        return this._textSelectionInfo.get(unitId)?.get(subUnitId);
    }

    private _refresh(param: IDocSelectionManagerSearchParam): void {
        const allTextSelectionInfo = this._getTextRanges(param);

        if (allTextSelectionInfo == null) {
            return;
        }

        const { textRanges, rectRanges } = allTextSelectionInfo;

        const docRanges = [...textRanges, ...rectRanges];

        const { unitId, subUnitId } = param;

        this._refreshSelection$.next({
            unitId,
            subUnitId,
            docRanges,
            isEditing: false,
        });
    }

    private _replaceByParam(insertParam: ITextSelectionManagerInsertParam) {
        const { unitId, subUnitId, ...selectionInsertParam } = insertParam;

        if (!this._textSelectionInfo.has(unitId)) {
            this._textSelectionInfo.set(unitId, new Map());
        }

        const unitTextRange = this._textSelectionInfo.get(unitId)!;

        unitTextRange.set(subUnitId, { ...selectionInsertParam });
    }

    private _addByParam(insertParam: ITextSelectionManagerInsertParam): void {
        const { unitId, subUnitId, ...selectionInsertParam } = insertParam;

        if (!this._textSelectionInfo.has(unitId)) {
            this._textSelectionInfo.set(unitId, new Map());
        }

        const unitTextRange = this._textSelectionInfo.get(unitId)!;

        if (!unitTextRange.has(subUnitId)) {
            unitTextRange.set(subUnitId, { ...selectionInsertParam });
        } else {
            const OldTextRanges = unitTextRange.get(subUnitId)!;
            OldTextRanges.textRanges.push(...insertParam.textRanges);
        }
    }
}