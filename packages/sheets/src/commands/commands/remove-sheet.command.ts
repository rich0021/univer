import type { ICommand } from '@univerjs/core';
import {
    CommandType,
    ICommandService,
    IUndoRedoService,
    IUniverInstanceService,
    sequenceExecute,
} from '@univerjs/core';
import type { IAccessor } from '@wendellhu/redi';

import type {
    IInsertSheetMutationParams,
    IRemoveSheetMutationParams,
} from '../../basics/interfaces/mutation-interface';
import { SheetInterceptorService } from '../../services/sheet-interceptor/sheet-interceptor.service';
import { InsertSheetMutation } from '../mutations/insert-sheet.mutation';
import { RemoveSheetMutation, RemoveSheetUndoMutationFactory } from '../mutations/remove-sheet.mutation';
import type { ISetWorksheetActiveOperationParams } from '../operations/set-worksheet-active.operation';

export interface IRemoveSheetCommandParams {
    workbookId?: string;
    worksheetId?: string;
}

/**
 * The command to insert new worksheet
 */
export const RemoveSheetCommand: ICommand = {
    id: 'sheet.command.remove-sheet',
    type: CommandType.COMMAND,
    handler: async (accessor: IAccessor, params?: IRemoveSheetCommandParams) => {
        const commandService = accessor.get(ICommandService);
        const undoRedoService = accessor.get(IUndoRedoService);
        const univerInstanceService = accessor.get(IUniverInstanceService);
        const sheetInterceptorService = accessor.get(SheetInterceptorService);
        let workbookId = univerInstanceService.getCurrentUniverSheetInstance().getUnitId();
        let worksheetId = univerInstanceService
            .getCurrentUniverSheetInstance()

            .getActiveSheet()
            .getSheetId();

        if (params) {
            workbookId = params.workbookId ?? workbookId;
            worksheetId = params.worksheetId ?? worksheetId;
        }

        const workbook = univerInstanceService.getUniverSheetInstance(workbookId);
        if (!workbook) return false;
        const worksheet = workbook.getSheetBySheetId(worksheetId);
        if (!worksheet) return false;
        if (workbook.getSheets().length <= 1) return false;

        const index = workbook.getSheetIndex(worksheet);
        const activateSheetId = workbook.getConfig().sheetOrder[index + 1];

        const activeSheetMutationParams: ISetWorksheetActiveOperationParams = {
            workbookId,
            worksheetId: activateSheetId,
        };

        // prepare do mutations
        const RemoveSheetMutationParams: IRemoveSheetMutationParams = {
            worksheetId,
            workbookId,
        };
        const InsertSheetMutationParams: IInsertSheetMutationParams = RemoveSheetUndoMutationFactory(
            accessor,
            RemoveSheetMutationParams
        );
        const intercepted = sheetInterceptorService.onCommandExecute({
            id: RemoveSheetCommand.id,
            params: { workbookId, worksheetId },
        });
        const redos = [{ id: RemoveSheetMutation.id, params: RemoveSheetMutationParams }, ...intercepted.redos];
        const undos = [...intercepted.undos, { id: InsertSheetMutation.id, params: InsertSheetMutationParams }];
        const result = sequenceExecute(redos, commandService);

        if (result) {
            undoRedoService.pushUndoRedo({
                unitID: workbookId,
                undoMutations: undos,
                redoMutations: redos,
            });

            return true;
        }

        return false;
    },
};