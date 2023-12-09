import type { ICommand, IWorksheetData } from '@univerjs/core';
import {
    CommandType,
    DEFAULT_WORKSHEET,
    ICommandService,
    IUndoRedoService,
    IUniverInstanceService,
    Tools,
} from '@univerjs/core';
import type { IAccessor } from '@wendellhu/redi';

import type {
    IInsertSheetMutationParams,
    IRemoveSheetMutationParams,
} from '../../basics/interfaces/mutation-interface';
import { InsertSheetMutation, InsertSheetUndoMutationFactory } from '../mutations/insert-sheet.mutation';
import { RemoveSheetMutation } from '../mutations/remove-sheet.mutation';

export interface InsertSheetCommandParams {
    workbookId?: string;
    index?: number;
    sheet?: IWorksheetData;
}

/**
 * The command to insert new worksheet
 */
export const InsertSheetCommand: ICommand = {
    id: 'sheet.command.insert-sheet',
    type: CommandType.COMMAND,
    handler: async (accessor: IAccessor, params?: InsertSheetCommandParams) => {
        const commandService = accessor.get(ICommandService);
        const undoRedoService = accessor.get(IUndoRedoService);
        const univerInstanceService = accessor.get(IUniverInstanceService);

        let workbookId = univerInstanceService.getCurrentUniverSheetInstance().getUnitId();

        if (params) {
            workbookId = params.workbookId ?? workbookId;
        }

        const workbook = univerInstanceService.getUniverSheetInstance(workbookId);
        if (!workbook) return false;

        let index = workbook.getSheets().length;
        let sheetConfig = Tools.deepClone(DEFAULT_WORKSHEET);
        if (params) {
            index = params.index ?? index;
            if (params.sheet) {
                sheetConfig = params.sheet;
            } else {
                sheetConfig.id = Tools.generateRandomId();
                sheetConfig.name = `工作表${++workbook.getSheets().length}`; // Todo: 表名
            }
        } else {
            sheetConfig.id = Tools.generateRandomId();
            sheetConfig.name = `工作表${++workbook.getSheets().length}`; // Todo: 表名
        }

        // prepare do mutations
        const insertSheetMutationParams: IInsertSheetMutationParams = {
            index,
            sheet: sheetConfig,
            workbookId,
        };
        const removeSheetMutationParams: IRemoveSheetMutationParams = InsertSheetUndoMutationFactory(
            accessor,
            insertSheetMutationParams
        );
        // execute do mutations and add undo mutations to undo stack if completed
        const result = commandService.syncExecuteCommand(InsertSheetMutation.id, insertSheetMutationParams);

        if (result) {
            undoRedoService.pushUndoRedo({
                unitID: workbookId,
                undoMutations: [{ id: RemoveSheetMutation.id, params: removeSheetMutationParams }],
                redoMutations: [{ id: InsertSheetMutation.id, params: insertSheetMutationParams }],
            });

            return true;
        }

        return false;
    },
};