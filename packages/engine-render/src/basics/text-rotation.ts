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

import { BooleanNumber, type ITextRotation } from '@univerjs/core';

export const VERTICAL_ROTATE_ANGLE = 90;

export function convertTextRotation(textRotation: ITextRotation) {
    const { a: angle = 0, v: isVertical = BooleanNumber.FALSE } = textRotation;
    let centerAngle = 0;
    let vertexAngle = angle;
    if (isVertical === BooleanNumber.TRUE) {
        centerAngle = VERTICAL_ROTATE_ANGLE;
        vertexAngle = VERTICAL_ROTATE_ANGLE;
    }

    return { centerAngle, vertexAngle };
}