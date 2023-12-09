import { InsertColMutation, InsertRowMutation } from '../../commands/mutations/insert-row-col.mutation';
import { MoveRangeMutation } from '../../commands/mutations/move-range.mutation';
import { MoveColsMutation, MoveRowsMutation } from '../../commands/mutations/move-rows-cols.mutation';
import { RemoveColMutation, RemoveRowMutation } from '../../commands/mutations/remove-row-col.mutation';
import { SetColHiddenMutation, SetColVisibleMutation } from '../../commands/mutations/set-col-visible.mutation';
import { SetRangeValuesMutation } from '../../commands/mutations/set-range-values.mutation';
import { SetRowHiddenMutation, SetRowVisibleMutation } from '../../commands/mutations/set-row-visible.mutation';
import { SetWorksheetColWidthMutation } from '../../commands/mutations/set-worksheet-col-width.mutation';
import {
    SetWorksheetRowAutoHeightMutation,
    SetWorksheetRowHeightMutation,
    SetWorksheetRowIsAutoHeightMutation,
} from '../../commands/mutations/set-worksheet-row-height.mutation';
import { SetWorksheetActiveOperation } from '../../commands/operations/set-worksheet-active.operation';

export const COMMAND_LISTENER_SKELETON_CHANGE = [
    SetWorksheetRowHeightMutation.id,
    SetWorksheetRowIsAutoHeightMutation.id,
    SetWorksheetRowAutoHeightMutation.id,
    SetWorksheetColWidthMutation.id,
    SetWorksheetActiveOperation.id,
    InsertRowMutation.id,
    RemoveRowMutation.id,
    InsertColMutation.id,
    RemoveColMutation.id,
    MoveRowsMutation.id,
    MoveColsMutation.id,
    SetColHiddenMutation.id,
    SetColVisibleMutation.id,
    SetRowHiddenMutation.id,
    SetRowVisibleMutation.id,
];

export const COMMAND_LISTENER_VALUE_CHANGE = [SetRangeValuesMutation.id, MoveRangeMutation.id];