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

export default {
    AVEDEV: {
        description: '傳回資料點與它們的平均值的絕對偏差平均值。 ',
        abstract: '返回資料點與它們的平均值的絕對偏差平均值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/avedev-%E5%87%BD%E6%95%B0-58fe8d65-2a84-4dc7-8052-f3f87b5c6639',
            },
        ],
        functionParameter: {
            number1: { name: '數值 1', detail: '要計算平均值的第一個數字、儲存格參考或儲存格區域。 ' },
            number2: { name: '數值 2', detail: '要計算平均值的其他數字、儲存格參考或儲存格區域，最多可包含 255 個。 ' },
        },
    },
    AVERAGE: {
        description: '傳回參數的平均值（算術平均值）。 ',
        abstract: '傳回其參數的平均值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/average-%E5%87%BD%E6%95%B0-047bac88-d466-426c-a32b-8f33eb960cf6',
            },
        ],
        functionParameter: {
            number1: {
                name: '數值 1',
                detail: '要計算平均值的第一個數字、儲存格參考或儲存格區域。 ',
            },
            number2: {
                name: '數值 2',
                detail: '要計算平均值的其他數字、儲存格參考或儲存格區域，最多可包含 255 個。 ',
            },
        },
    },
    AVERAGEA: {
        description: '傳回其參數的平均值，包括數字、文字和邏輯值。 ',
        abstract: '傳回其參數的平均值，包括數字、文字和邏輯值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/averagea-%E5%87%BD%E6%95%B0-f5f84098-d453-4f4c-bbba-3d2c66356091',
            },
        ],
        functionParameter: {
            value1: {
                name: '值 1',
                detail: '要計算平均值的第一個數字、儲存格參考或儲存格區域。 ',
            },
            value2: {
                name: '值 2',
                detail: '要計算平均值的其他數字、儲存格參考或儲存格區域，最多可包含 255 個。 ',
            },
        },
    },
    AVERAGEIF: {
        description: '返回區域中滿足給定條件的所有單元格的平均值（算術平均值）。 ',
        abstract: '返回區域中滿足給定條件的所有單元格的平均值（算術平均值）',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/averageif-%E5%87%BD%E6%95%B0-faec8e2e-0dec-4308-af69-f5576d8ac642',
            },
        ],
        functionParameter: {
            range: { name: '範圍', detail: '要計算平均值的一個或多個儲存格，其中包含數字或包含數字的名稱、陣列或參考。 ' },
            criteria: { name: '條件', detail: '形式為數字、表達式、儲存格引用或文字的條件，用來定義將計算平均值的儲存格。 例如，條件可以表示為 32、"32"、">32"、"蘋果" 或 B4。 ' },
            averageRange: { name: '平均範圍', detail: '計算平均值的實際單元格組。 如果省略，則使用 range。 ' },
        },
    },
    AVERAGEIFS: {
        description: '傳回滿足多個條件的所有儲存格的平均值（算術平均值）。 ',
        abstract: '返回所有滿足多個條件的單元格的平均值（算術平均值）',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/averageifs-%E5%87%BD%E6%95%B0-48910c45-1fc0-4389-a028-f7c5c3001690',
            },
        ],
        functionParameter: {
            averageRange: { name: '平均值範圍', detail: '要計算平均值的一個或多個單元格，其中包含數字或包含數字的名稱、數組或引用。 ' },
            criteriaRange1: { name: '條件範圍 1', detail: '是一組用於條件計算的單元格。 ' },
            criteria1: { name: '條件 1', detail: '用來定義將計算平均值的儲存格。 例如，條件可以表示為 32、"32"、">32"、"蘋果" 或 B4' },
            criteriaRange2: { name: '條件範圍 2', detail: '附加區域。 最多可輸入 127 個區域。 ' },
            criteria2: { name: '條件 2', detail: '附加關聯條件。 最多可以輸入 127 個條件。 ' },
        },
    },
    BETA_DIST: {
        description: '傳回 beta 累積分佈函數',
        abstract: '傳回 beta 累積分佈函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/beta-dist-%E5%87%BD%E6%95%B0-11188c9c-780a-42c7-ba43-9ecb5a878d31',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    BETA_INV: {
        description: '傳回指定 beta 分佈的累積分佈函數的反函數',
        abstract: '傳回指定 beta 分佈的累積分佈函數的反函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/beta-inv-%E5%87%BD%E6%95%B0-e84cb8aa-8df0-4cf6-9892-83a341d252eb',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    BINOM_DIST: {
        description: '傳回一元二項式分佈的機率',
        abstract: '傳回一元二項式分佈的機率',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/binom-dist-%E5%87%BD%E6%95%B0-c5ae37b6-f39c-4be2-94c2-509a1480770c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    BINOM_DIST_RANGE: {
        description: '使用二項式分佈傳回試驗結果的機率',
        abstract: '使用二項式分佈返回試驗結果的機率',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/binom-dist-range-%E5%87%BD%E6%95%B0-17331329-74c7-4053-bb4c-6653a7421595',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    BINOM_INV: {
        description: '傳回使累積二項式分佈小於或等於臨界值的最小值',
        abstract: '傳回使累積二項式分佈小於或等於臨界值的最小值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/binom-inv-%E5%87%BD%E6%95%B0-80a0370c-ada6-49b4-83e7-05a91ba77ac9',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    CHISQ_DIST: {
        description: '傳回累積 beta 機率密度函數',
        abstract: '返回累積 beta 機率密度函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/chisq-dist-%E5%87%BD%E6%95%B0-8486b05e-5c05-4942-a9ea-f6b341518732',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    CHISQ_DIST_RT: {
        description: '傳回 χ2 分佈的單尾機率',
        abstract: '傳回 χ2 分佈的單尾機率',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/chisq-dist-rt-%E5%87%BD%E6%95%B0-dc4832e8-ed2b-49ae-8d7c-b28d5804c0f2',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    CHISQ_INV: {
        description: '傳回累積 beta 機率密度函數',
        abstract: '返回累積 beta 機率密度函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/chisq-inv-%E5%87%BD%E6%95%B0-400db556-62b3-472d-80b3-254723e7092f',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    CHISQ_INV_RT: {
        description: '傳回 χ2 分佈的單尾機率的反函數',
        abstract: '傳回 χ2 分佈的單尾機率的反函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/chisq-inv-rt-%E5%87%BD%E6%95%B0-435b5ed8-98d5-4da6-823f-293e2cbc94fe',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    CHISQ_TEST: {
        description: '返回獨立性檢驗值',
        abstract: '返回獨立性檢驗值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/chisq-test-%E5%87%BD%E6%95%B0-2e8a7861-b14a-4985-aa93-fb88de3f260f',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    CONFIDENCE_NORM: {
        description: '傳回總體平均值的置信區間',
        abstract: '傳回總體平均值的置信區間',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/confidence-norm-%E5%87%BD%E6%95%B0-7cec58a6-85bb-488d-91c3-63828d4fbfd4',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    CONFIDENCE_T: {
        description: '傳回總體平均值的置信區間（使用學生 t-分佈）',
        abstract: '傳回總體平均值的置信區間（使用學生 t-分佈）',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/confidence-t-%E5%87%BD%E6%95%B0-e8eca395-6c3a-4ba9-9003-79ccc61d3c53',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    CORREL: {
        description: '傳回兩個資料集之間的相關係數',
        abstract: '傳回兩個資料集之間的相關係數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/correl-%E5%87%BD%E6%95%B0-995dcef7-0c0a-4bed-a3fb-239d7b68ca92',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    COUNT: {
        description: '計算包含數字的單元格數以及參數列表中數字的個數。 ',
        abstract: '計算參數清單中數字的個數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/count-%E5%87%BD%E6%95%B0-a59cd7fc-b623-4d93-87a4-d23bf411294c',
            },
        ],
        functionParameter: {
            value1: {
                name: '值 1',
                detail: '要計算其中數字的數量的第一項、單元格引用或區域。 ',
            }, value2: {
                name: '值 2',
                detail: '要計算其中數字的個數的其他項目、儲存格參考或區域，最多可包含 255 個。 ',
            },
        },
    },
    COUNTA: {
        description: `計算包含任何類型的資訊（包括錯誤值和空白文字 ("")）的儲存格
 如果不需要對邏輯值、文字或錯誤值進行計數（換句話說，只希望對包含數字的儲存格進行計數），請使用 COUNT 函數。 `,
        abstract: '計算參數清單中值的個數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/counta-%E5%87%BD%E6%95%B0-7dc98875-d5c1-46f1-9a82-53f3219e2509',
            },
        ],
        functionParameter: {
            number1: {
                name: '數值 1',
                detail: '必填。 表示要計數的值的第一個參數',
            },
            number2: {
                name: '數值 2',
                detail: '可選。 表示要計數的值的其他參數，最多可包含 255 個參數。 ',
            },
        },
    },
    COUNTBLANK: {
        description: '計算區域內空白單元格的數量。 ',
        abstract: '計算區域內空白儲存格的數量',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/countblank-%E5%87%BD%E6%95%B0-6a92d772-675c-4bee-b346-24af6bd3ac22',
            },
        ],
        functionParameter: {
            range: { name: '範圍', detail: '需要計算其中空白單元格數的區域。 ' },
        },
    },
    COUNTIF: {
        description: '計算區域內符合給定條件的單元格的數量。 ',
        abstract: '計算區域內符合給定條件的單元格的數量',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/countif-%E5%87%BD%E6%95%B0-e0de10c6-f885-4e71-abb4-1f464816df34',
            },
        ],
        functionParameter: {
            range: { name: '範圍', detail: '要進行計數的單元格組。 區域可以包括數字、陣列、命名區域或包含數字的引用。 空白和文字值將被忽略。 ' },
            criteria: { name: '條件', detail: '用來決定要統計哪些儲存格的數量的數字、表達式、儲存格參考或文字字串。 \n例如，可以使用 32 之類數字，「>32」之類比較，B4 之類單元格，或「蘋果」之類單字。 \nCOUNTIF 只使用一個條件。 如果要使用多個條件，請使用 COUNTIFS。 ' },
        },
    },
    COUNTIFS: {
        description: '計算區域內符合多個條件的單元格的數量。 ',
        abstract: '計算區域內符合多個條件的單元格的數量',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/countifs-%E5%87%BD%E6%95%B0-dda3dc6e-f74e-4aee-88bc-aa8c2a866842',
            },
        ],
        functionParameter: {
            criteriaRange1: { name: '條件範圍 1', detail: '在其中計算關聯條件的第一個區域。 ' },
            criteria1: { name: '條件 1', detail: '條件的形式為數字、表達式、單元格引用或文本，它定義了要計數的單元格範圍。 例如，條件可以表示為 32、">32"、B4、"apples"或 "32"。 ' },
            criteriaRange2: { name: '條件範圍 2', detail: '附加區域。 最多可輸入 127 個區域。 ' },
            criteria2: { name: '條件 2', detail: '附加關聯條件。 最多可以輸入 127 個條件。 ' },
        },
    },
    COVARIANCE_P: {
        description: '傳回協方差（成對偏差乘積的平均值）',
        abstract: '傳回協方差（成對偏差乘積的平均值）',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/covariance-p-%E5%87%BD%E6%95%B0-6f0e1e6d-956d-4e4b-9943-cfef0bf9edfc',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    COVARIANCE_S: {
        description: '傳回樣本協方差，即兩個資料集中每對資料點的偏差乘積的平均值',
        abstract: '傳回樣本協方差，即兩個資料集中每對資料點的偏差乘積的平均值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/covariance-s-%E5%87%BD%E6%95%B0-0a539b74-7371-42aa-a18f-1f5320314977',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    DEVSQ: {
        description: '傳回偏差的平方和',
        abstract: '傳回偏差的平方和',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/devsq-%E5%87%BD%E6%95%B0-8b739616-8376-4df5-8bd0-cfe0a6caf444',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    EXPON_DIST: {
        description: '返回指數分佈',
        abstract: '返回指數分佈',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/expon-dist-%E5%87%BD%E6%95%B0-4c12ae24-e563-4155-bf3e-8b78b6ae140e',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    F_DIST: {
        description: '返回 F 機率分佈',
        abstract: '返回 F 機率分佈',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/f-dist-%E5%87%BD%E6%95%B0-a887efdc-7c8e-46cb-a74a-f884cd29b25d',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    F_DIST_RT: {
        description: '返回 F 機率分佈',
        abstract: '返回 F 機率分佈',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/f-dist-rt-%E5%87%BD%E6%95%B0-d74cbb00-6017-4ac9-b7d7-6049badc0520',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    F_INV: {
        description: '傳回 F 機率分佈的反函數',
        abstract: '傳回 F 機率分佈的反函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/f-inv-%E5%87%BD%E6%95%B0-0dda0cf9-4ea0-42fd-8c3c-417a1ff30dbe',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    F_INV_RT: {
        description: '傳回 F 機率分佈的反函數',
        abstract: '傳回 F 機率分佈的反函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/f-inv-rt-%E5%87%BD%E6%95%B0-d371aa8f-b0b1-40ef-9cc2-496f0693ac00',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    F_TEST: {
        description: '傳回 F 檢驗的結果',
        abstract: '傳回 F 檢驗的結果',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/f-test-%E5%87%BD%E6%95%B0-100a59e7-4108-46f8-8443-78ffacb6c0a7',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    FISHER: {
        description: '傳回 Fisher 變換值',
        abstract: '傳回 Fisher 變換值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/fisher-%E5%87%BD%E6%95%B0-d656523c-5076-4f95-b87b-7741bf236c69',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    FISHERINV: {
        description: '傳回 Fisher 變換的反函數',
        abstract: '傳回 Fisher 變換的反函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/fisherinv-%E5%87%BD%E6%95%B0-62504b39-415a-4284-a285-19c8e82f86bb',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    FORECAST: {
        description: '返回線性趨勢值',
        abstract: '返回線性趨勢值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/forecast-%E5%92%8C-forecast-linear-%E5%87%BD%E6%95%B0-50ca49c9-7b40-4892 -94e4-7ad38bbeda99',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    FORECAST_ETS: {
        description: '透過使用指數平滑 (ETS) 演算法的 AAA 版本，傳回基於現有（歷史）值的未來值',
        abstract: '透過使用指數平滑 (ETS) 演算法的 AAA 版本，傳回基於現有（歷史）值的未來值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/%E9%A2%84%E6%B5%8B%E5%87%BD%E6%95%B0-%E5%8F%82 %E8%80%83-897a2fe9-6595-4680-a0b0-93e0308d5f6e#_FORECAST.ETS',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    FORECAST_ETS_CONFINT: {
        description: '傳回指定目標日期預測值的置信區間',
        abstract: '傳回指定目標日期預測值的置信區間',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/%E9%A2%84%E6%B5%8B%E5%87%BD%E6%95%B0-%E5%8F%82 %E8%80%83-897a2fe9-6595-4680-a0b0-93e0308d5f6e#_FORECAST.ETS.CONFINT',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    FORECAST_ETS_SEASONALITY: {
        description: '傳回 Excel 針對指定時間系列偵測到的重複模式的長度',
        abstract: '傳回 Excel 針對指定時間系列偵測到的重複模式的長度',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/%E9%A2%84%E6%B5%8B%E5%87%BD%E6%95%B0-%E5%8F%82 %E8%80%83-897a2fe9-6595-4680-a0b0-93e0308d5f6e#_FORECAST.ETS.SEASONALITY',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    FORECAST_ETS_STAT:
    {
        description: '傳回作為時間序列預測的結果的統計值。 ',
        abstract: '傳回作為時間序列預測的結果的統計值。 ',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/%E9%A2%84%E6%B5%8B%E5%87%BD%E6%95%B0-%E5%8F%82 %E8%80%83-897a2fe9-6595-4680-a0b0-93e0308d5f6e#_FORECAST.ETS.STAT',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    FORECAST_LINEAR: {
        description: '傳回基於現有值的未來值',
        abstract: '傳回基於現有值的未來值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/%E9%A2%84%E6%B5%8B%E5%87%BD%E6%95%B0-%E5%8F%82 %E8%80%83-897a2fe9-6595-4680-a0b0-93e0308d5f6e#_FORECAST.LINEAR',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    FREQUENCY: {
        description: '以垂直數組的形式傳回頻率分佈',
        abstract: '以垂直數組的形式傳回頻率分佈',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/frequency-%E5%87%BD%E6%95%B0-44e3be2b-eca0-42cd-a3f7-fd9ea898fdb9',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    GAMMA: {
        description: '傳回 γ 函數值',
        abstract: '返回 γ 函數值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/gamma-%E5%87%BD%E6%95%B0-ce1702b1-cf55-471d-8307-f83be0fc5297',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    GAMMA_DIST: {
        description: '返回 γ 分佈',
        abstract: '返回 γ 分佈',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/gamma-dist-%E5%87%BD%E6%95%B0-9b6f1538-d11c-4d5f-8966-21f6a2201def',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    GAMMA_INV: {
        description: '傳回 γ 累積分佈函數的反函數',
        abstract: '傳回 γ 累積分佈函數的反函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/gamma-inv-%E5%87%BD%E6%95%B0-74991443-c2b0-4be5-aaab-1aa4d71fbb18',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    GAMMALN: {
        description: '傳回 γ 函數的自然對數，Γ(x)',
        abstract: '傳回 γ 函數的自然對數，Γ(x)',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/gammaln-%E5%87%BD%E6%95%B0-b838c48b-c65f-484f-9e1d-141c55470eb9',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    GAMMALN_PRECISE: {
        description: '傳回 γ 函數的自然對數，Γ(x)',
        abstract: '傳回 γ 函數的自然對數，Γ(x)',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/gammaln-precise-%E5%87%BD%E6%95%B0-5cdfe601-4e1e-4189-9d74-241ef1caa599',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    GAUSS: {
        description: '傳回小於標準常態累積分佈 0.5 的值',
        abstract: '傳回小於標準常態累積分佈 0.5 的值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/gauss-%E5%87%BD%E6%95%B0-069f1b4e-7dee-4d6a-a71f-4b69044a6b33',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    GEOMEAN: {
        description: '返回幾何平均值',
        abstract: '返回幾何平均',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/geomean-%E5%87%BD%E6%95%B0-db1ac48d-25a5-40a0-ab83-0b38980e40d5',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    GROWTH: {
        description: '返回指數趨勢值',
        abstract: '返回指數趨勢值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/growth-%E5%87%BD%E6%95%B0-541a91dc-3d5e-437d-b156-21324e68b80d',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    HARMEAN: {
        description: '返回調和平均值',
        abstract: '返回調和平均',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/harmean-%E5%87%BD%E6%95%B0-5efd9184-fab5-42f9-b1d3-57883a1d3bc6',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    HYPGEOM_DIST: {
        description: '返回超幾何分佈',
        abstract: '返回超幾何分佈',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/hypgeom-dist-%E5%87%BD%E6%95%B0-6dbd547f-1d12-4b1f-8ae5-b0d9e3d22fbf',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    INTERCEPT: {
        description: '傳回線性迴歸線的截距',
        abstract: '返回線性迴歸線的截距',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/intercept-%E5%87%BD%E6%95%B0-2a9b74e2-9d47-4772-b663-3bca70bf63ef',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    KURT: {
        description: '傳回資料集的峰值',
        abstract: '返回資料集的峰值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/kurt-%E5%87%BD%E6%95%B0-bc3a265c-5da4-4dcb-b7fd-c237789095ab',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    LARGE: {
        description: '返回資料集中第 k 個最大值',
        abstract: '返回資料集中第 k 個最大值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/large-%E5%87%BD%E6%95%B0-3af0af19-1190-42bb-bb8b-01672ec00a64',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    LINEST: {
        description: '傳回線性趨勢的參數',
        abstract: '返回線性趨勢的參數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/linest-%E5%87%BD%E6%95%B0-84d7d0d9-6e50-4101-977a-fa7abf772b6d',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    LOGEST: {
        description: '傳回指數趨勢的參數',
        abstract: '傳回指數趨勢的參數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/logest-%E5%87%BD%E6%95%B0-f27462d8-3657-4030-866b-a272c1d18b4b',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    LOGNORM_DIST: {
        description: '傳回對數累積分佈函數',
        abstract: '傳回對數累積分佈函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/lognorm-dist-%E5%87%BD%E6%95%B0-eb60d00b-48a9-4217-be2b-6074aee6b070',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    LOGNORM_INV: {
        description: '傳回對數累積分佈的反函數',
        abstract: '傳回對數累積分佈的反函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/lognorm-inv-%E5%87%BD%E6%95%B0-fe79751a-f1f2-4af8-a0a1-e151b2d4f600',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    MAX: {
        description: '傳回一組值中的最大值。 ',
        abstract: '傳回參數清單中的最大值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/max-%E5%87%BD%E6%95%B0-e0012414-9ac8-4b34-9a47-73e662c08098',
            },
        ],
        functionParameter: {
            number1: {
                name: '數值 1',
                detail: '要計算最大值的第一個數字、儲存格參考或儲存格區域。 ',
            },
            number2: {
                name: '數值 2',
                detail: '若要計算最大值的其他數字、儲存格參考或儲存格區域，最多可包含 255 個。 ',
            },
        },
    },
    MAXA: {
        description: '傳回參數清單中的最大值，包括數字、文字和邏輯值。 ',
        abstract: '傳回參數清單中的最大值，包括數字、文字和邏輯值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/maxa-%E5%87%BD%E6%95%B0-814bda1e-3840-4bff-9365-2f59ac2ee62d',
            },
        ],
        functionParameter: {
            value1: { name: '值 1', detail: '要從中找出最大值的第一個數值參數。 ' },
            value2: { name: '值 2', detail: '要從中找出最大值的 2 到 255 個數值參數。 ' },
        },
    },
    MAXIFS: {
        description: '傳回一組給定條件或標準指定的單元格之間的最大值',
        abstract: '傳回一組給定條件或標準指定的單元格之間的最大值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/maxifs-%E5%87%BD%E6%95%B0-dfd611e6-da2c-488a-919b-9b6376b28883',
            },
        ],
        functionParameter: {
            maxRange: { name: '最大值範圍', detail: '確定最大值的實際儲存格區域。 ' },
            criteriaRange1: { name: '條件範圍 1', detail: '是一組用於條件計算的單元格。 ' },
            criteria1: { name: '條件 1', detail: '用來決定哪些儲存格是最大值的條件，格式為數字、表達式或文字。 一組相同的條件適用於 MINIFS、SUMIFS 和 AVERAGEIFS 函數。 ' },
            criteriaRange2: { name: '條件範圍 2', detail: '附加區域。 最多可輸入 127 個區域。 ' },
            criteria2: { name: '條件 2', detail: '附加關聯條件。 最多可以輸入 127 個條件。 ' },
        },
    },
    MEDIAN: {
        description: '傳回給定數值集合的中位數',
        abstract: '傳回給定數值集合的中位數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/median-%E5%87%BD%E6%95%B0-d0916313-4753-414c-8537-ce85bdd967d2',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    MIN: {
        description: '傳回一組值中的最小值。 ',
        abstract: '傳回參數清單中的最小值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/min-%E5%87%BD%E6%95%B0-61635d12-920f-4ce2-a70f-96f202dcc152',
            },
        ],
        functionParameter: {
            number1: {
                name: '數值 1',
                detail: '要計算最小值的第一個數字、儲存格參考或儲存格區域。 ',
            },
            number2: {
                name: '數值 2',
                detail: '要計算最小值的其他數字、儲存格參考或儲存格區域，最多可包含 255 個。 ',
            },
        },
    },
    MINA: {
        description: '傳回參數清單中的最小值，包括數字、文字和邏輯值。 ',
        abstract: '傳回參數清單中的最小值，包括數字、文字和邏輯值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/mina-%E5%87%BD%E6%95%B0-245a6f46-7ca5-4dc7-ab49-805341bc31d3',
            },
        ],
        functionParameter: {
            value1: { name: '值 1', detail: '要計算最小值的第一個數字、儲存格參考或儲存格區域。 ' },
            value2: { name: '值 2', detail: '其他要計算最小值的數字、儲存格參考或儲存格區域，最多可包含 255 個。 ' },
        },
    },
    MINIFS: {
        description: '傳回一組給定條件或標準指定的單元格之間的最小值。 ',
        abstract: '傳回一組給定條件或標準指定的單元格之間的最小值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/minifs-%E5%87%BD%E6%95%B0-6ca1ddaa-079b-4e74-80cc-72eef32e6599',
            },
        ],
        functionParameter: {
            minRange: { name: '最小值範圍', detail: '確定最小值的實際單元格區域。 ' },
            criteriaRange1: { name: '條件範圍 1', detail: '是一組用於條件計算的單元格。 ' },
            criteria1: { name: '條件 1', detail: '用來決定哪些儲存格是最小值的條件，格式為數字、表達式或文字。 一組相同的條件適用於 MAXIFS、SUMIFS 和 AVERAGEIFS 函數。 ' },
            criteriaRange2: { name: '條件範圍 2', detail: '附加區域。 最多可輸入 127 個區域。 ' },
            criteria2: { name: '條件 2', detail: '附加關聯條件。 最多可以輸入 127 個條件。 ' },
        },
    },
    MODE_MULT: {
        description: '傳回一組資料或資料區域中出現頻率最高或重複出現的數值的垂直陣列',
        abstract: '傳回一組資料或資料區域中出現頻率最高或重複出現的數值的垂直陣列',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/mode-mult-%E5%87%BD%E6%95%B0-50fd9464-b2ba-4191-b57a-39446689ae8c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    MODE_SNGL: {
        description: '傳回在資料集內出現次數最多的值',
        abstract: '傳回在資料集內出現次數最多的值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/mode-sngl-%E5%87%BD%E6%95%B0-f1267c16-66c6-4386-959f-8fba5f8bb7f8',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    NEGBINOM_DIST: {
        description: '傳回負二項式分佈',
        abstract: '返回負二項式分佈',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/negbinom-dist-%E5%87%BD%E6%95%B0-c8239f89-c2d0-45bd-b6af-172e570f8599',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    NORM_DIST: {
        description: '傳回常態累積分佈',
        abstract: '返回常態累積分佈',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/norm-dist-%E5%87%BD%E6%95%B0-edb1cc14-a21c-4e53-839d-8082074c9f8d',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    NORM_INV: {
        description: '傳回常態累積分佈的反函數',
        abstract: '傳回常態累積分佈的反函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/norm-inv-%E5%87%BD%E6%95%B0-54b30935-fee7-493c-bedb-2278a9db7e13',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    NORM_S_DIST: {
        description: '傳回標準常態累積分佈',
        abstract: '傳回標準常態累積分佈',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/norm-s-dist-%E5%87%BD%E6%95%B0-1e787282-3832-4520-a9ae-bd2a8d99ba88',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    NORM_S_INV: {
        description: '傳回標準常態累積分佈函數的反函數',
        abstract: '傳回標準常態累積分佈函數的反函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/norm-s-inv-%E5%87%BD%E6%95%B0-d6d556b4-ab7f-49cd-b526-5a20918452b1',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    PEARSON: {
        description: '傳回 Pearson 乘積矩相關係數',
        abstract: '返回 Pearson 積矩相關係數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/pearson-%E5%87%BD%E6%95%B0-0c3e30fc-e5af-49c4-808a-3ef66e034c18',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    PERCENTILE_EXC: {
        description: '傳回某個區域中的數值的第 k 個百分點值，此處的 k 的範圍為 0 到 1（不含 0 和 1）',
        abstract: '傳回某個區域中的數值的第 k 個百分點值，此處的 k 的範圍為 0 到 1（不含 0 和 1）',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/percentile-exc-%E5%87%BD%E6%95%B0-bbaa7204-e9e1-4010-85bf-c31dc5dce4ba',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    PERCENTILE_INC: {
        description: '傳回區域中數值的第 k 個百分點的值',
        abstract: '傳回區域中數值的第 k 個百分點的值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/percentile-inc-%E5%87%BD%E6%95%B0-680f9539-45eb-410b-9a5e-c1355e5fe2ed',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    PERCENTRANK_EXC: {
        description: '將某個數值在資料集中的排位作為資料集的百分點值傳回，此處的百分點值的範圍為 0 到 1（不含 0 和 1）',
        abstract: '將某個數值在資料集中的排位作為資料集的百分點值返回，此處的百分點值的範圍為 0 到 1（不含 0 和 1）',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/percentrank-exc-%E5%87%BD%E6%95%B0-d8afee96-b7e2-4a2f-8c01-8fcdedaa6314',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    PERCENTRANK_INC: {
        description: '傳回資料集中值的百分比排位',
        abstract: '傳回資料集中值的百分比排位',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/percentrank-inc-%E5%87%BD%E6%95%B0-149592c9-00c0-49ba-86c1-c1f45b80463a',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    PERMUT: {
        description: '傳回給定數目物件的排列數',
        abstract: '傳回給定數目物件的排列數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/permut-%E5%87%BD%E6%95%B0-3bd1cb9a-2880-41ab-a197-f246a7a602d3',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    PERMUTATIONA: {
        description: '傳回可從總計物件中選取的給定數目物件（含重複）的排列數',
        abstract: '傳回可從總計物件中選取的給定數目物件（含重複）的排列數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/permutationa-%E5%87%BD%E6%95%B0-6c7d7fdc-d657-44e6-aa19-2857b25cae4e',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    PHI: {
        description: '傳回標準常態分佈的密度函數值',
        abstract: '傳回標準常態分佈的密度函數值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/phi-%E5%87%BD%E6%95%B0-23e49bc6-a8e8-402d-98d3-9ded87f6295c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    POISSON_DIST: {
        description: '返回泊松分佈',
        abstract: '返回泊松分佈',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/poisson-dist-%E5%87%BD%E6%95%B0-8fe148ff-39a2-46cb-abf3-7772695d9636',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    PROB: {
        description: '傳回區域中的數值落在指定區間內的機率',
        abstract: '傳回區域中的數值落在指定區間內的機率',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/prob-%E5%87%BD%E6%95%B0-9ac30561-c81c-4259-8253-34f0a238fc49',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    QUARTILE_EXC: {
        description: '基於百分點值傳回資料集的四分位，此處的百分點值的範圍為 0 到 1（不含 0 和 1）',
        abstract: '基於百分點值傳回資料集的四分位，此處的百分點值的範圍為 0 到 1（不含 0 和 1）',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/quartile-exc-%E5%87%BD%E6%95%B0-5a355b7a-840b-4a01-b0f1-f538c2864cad',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    QUARTILE_INC: {
        description: '傳回一組資料的四分位點',
        abstract: '傳回一組資料的四分位點',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/quartile-inc-%E5%87%BD%E6%95%B0-1bbacc80-5075-42f1-aed6-47d735c4819d',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    RANK_AVG: {
        description: '傳回一列數字的數字排位',
        abstract: '傳回一列數字的數字排位',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/rank-avg-%E5%87%BD%E6%95%B0-bd406a6f-eb38-4d73-aa8e-6d1c3c72e83a',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    RANK_EQ: {
        description: '傳回一列數字的數字排位',
        abstract: '傳回一列數字的數字排位',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/rank-eq-%E5%87%BD%E6%95%B0-284858ce-8ef6-450e-b662-26245be04a40',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    RSQ: {
        description: '傳回 Pearson 乘積矩相關係數的平方',
        abstract: '傳回 Pearson 積矩相關係數的平方',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/rsq-%E5%87%BD%E6%95%B0-d7161715-250d-4a01-b80d-a8364f2be08f',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    SKEW: {
        description: '傳回分佈的不對稱度',
        abstract: '返回分佈的不對稱度',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/skew-%E5%87%BD%E6%95%B0-bdf49d86-b1ef-4804-a046-28eaea69c9fa',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    SKEW_P: {
        description: '返回一個分佈的不對稱度：用來體現某一分佈相對其平均值的不對稱程度',
        abstract: '傳回一個分佈的不對稱度：用來反映某一分佈相對其平均值的不對稱程度',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/skew-p-%E5%87%BD%E6%95%B0-76530a5c-99b9-48a1-8392-26632d542fcb',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    SLOPE: {
        description: '返回線性迴歸線的斜率',
        abstract: '返回線性迴歸線的斜率',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/slope-%E5%87%BD%E6%95%B0-11fb8f97-3117-4813-98aa-61d7e01276b9',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    SMALL: {
        description: '傳回資料集中的第 k 個最小值',
        abstract: '傳回資料集中的第 k 個最小值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/small-%E5%87%BD%E6%95%B0-17da8222-7c82-42b2-961b-14c45384df07',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    STANDARDIZE: {
        description: '返回常態化數值',
        abstract: '返回常態化數值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/standardize-%E5%87%BD%E6%95%B0-81d66554-2d54-40ec-ba83-6437108ee775',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    STDEV_P: {
        description: '計算基於以參數形式給出的整個樣本總體的標準偏差（忽略邏輯值和文本）。 ',
        abstract: '基於整個樣本總體計算標準差',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/stdev-p-%E5%87%BD%E6%95%B0-6e917c05-31a0-496f-ade7-4f4e7462f285',
            },
        ],
        functionParameter: {
            number1: { name: '數值 1', detail: '對應於總體的第一個數值參數。 ' },
            number2: { name: '數值 2', detail: '對應於總體的 2 到 254 個數值參數。 也可以用單一數組或對某個數組的引用來代替用逗號分隔的參數。 ' },
        },
    },
    STDEV_S: {
        description: '基於樣本估算標準差（忽略樣本中的邏輯值和文字）。 ',
        abstract: '基於樣本估算標準差',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/stdev-s-%E5%87%BD%E6%95%B0-7d69cf97-0c1f-4acf-be27-f3e83904cc23',
            },
        ],
        functionParameter: {
            number1: { name: '數值 1', detail: '對應於總體樣本的第一個數值參數。 也可以用單一數組或對某個數組的引用來代替用逗號分隔的參數。 ' },
            number2: { name: '數值 2', detail: '對應於總體樣本的 2 到 254 個數值參數。 也可以用單一數組或對某個數組的引用來代替用逗號分隔的參數。 ' },
        },
    },
    STDEVA: {
        description: '基於樣本（包括數字、文字和邏輯值）估算標準差。 ',
        abstract: '基於樣本（包括數字、文字和邏輯值）估算標準差',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/stdeva-%E5%87%BD%E6%95%B0-5ff38888-7ea5-48de-9a6d-11ed73b29e9d',
            },
        ],
        functionParameter: {
            value1: { name: '值 1', detail: '對應於總體樣本的第一個值參數。 也可以用單一數組或對某個數組的引用來代替用逗號分隔的參數。 ' },
            value2: { name: '值 2', detail: '對應於總體樣本的 2 到 254 個值參數。 也可以用單一數組或對某個數組的引用來代替用逗號分隔的參數。 ' },
        },
    },
    STDEVPA: {
        description: '根據作為參數（包括文字和邏輯值）給定的整個總體計算標準偏差。 ',
        abstract: '基於樣本總體（包括數字、文本和邏輯值）計算標準偏差',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/stdevpa-%E5%87%BD%E6%95%B0-5578d4d6-455a-4308-9991-d405afe2c28c',
            },
        ],
        functionParameter: {
            value1: { name: '值 1', detail: '對應於總體的第一個值參數。 ' },
            value2: { name: '值 2', detail: '對應於總體的 2 到 254 個值參數。 也可以用單一數組或對某個數組的引用來代替用逗號分隔的參數。 ' },
        },
    },
    STEYX: {
        description: '傳回透過線性迴歸法預測每個 x 的 y 值時所產生的標準誤差',
        abstract: '返回透過線性迴歸法預測每個 x 的 y 值時所產生的標準誤差',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/steyx-%E5%87%BD%E6%95%B0-6ce74b2c-449d-4a6e-b9ac-f9cef5ba48ab',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    T_DIST: {
        description: '傳回學生 t-分佈的百分點（機率）',
        abstract: '返回學生 t-分佈的百分點（機率）',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/t-dist-%E5%87%BD%E6%95%B0-4329459f-ae91-48c2-bba8-1ead1c6c21b2',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    T_DIST_2T: {
        description: '傳回學生 t-分佈的百分點（機率）',
        abstract: '返回學生 t-分佈的百分點（機率）',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/t-dist-2t-%E5%87%BD%E6%95%B0-198e9340-e360-4230-bd21-f52f22ff5c28',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    T_DIST_RT: {
        description: '返回學生 t-分佈',
        abstract: '返回學生 t-分佈',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/t-dist-rt-%E5%87%BD%E6%95%B0-20a30020-86f9-4b35-af1f-7ef6ae683eda',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    T_INV: {
        description: '傳回作為機率和自由度函數的學生 t 分佈的 t 值',
        abstract: '返回作為機率和自由度函數的學生 t 分佈的 t 值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/t-inv-%E5%87%BD%E6%95%B0-2908272b-4e61-4942-9df9-a25fec9b0e2e',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    T_INV_2T: {
        description: '傳回學生 t-分佈的反函數',
        abstract: '傳回學生 t-分佈的反函數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/t-inv-2t-%E5%87%BD%E6%95%B0-ce72ea19-ec6c-4be7-bed2-b9baf2264f17',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    T_TEST: {
        description: '傳回與學生 t-檢定相關的機率',
        abstract: '返回與學生 t-檢定相關的機率',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/t-test-%E5%87%BD%E6%95%B0-d4e08ec3-c545-485f-962e-276f7cbed055',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    TREND: {
        description: '返回線性趨勢值',
        abstract: '返回線性趨勢值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/trend-%E5%87%BD%E6%95%B0-e2f135f0-8827-4096-9873-9a7cf7b51ef1',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    TRIMMEAN: {
        description: '傳回資料集的內部平均值',
        abstract: '傳回資料集的內部平均值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/trimmean-%E5%87%BD%E6%95%B0-d90c9878-a119-4746-88fa-63d988f511d3',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    VAR_P: {
        description: '計算基於整個樣本總體的變異數（忽略樣本總體中的邏輯值和文字）。 ',
        abstract: '計算以樣本總體為基礎的變異數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/var-p-%E5%87%BD%E6%95%B0-73d1285c-108c-4843-ba5d-a51f90656f3a',
            },
        ],
        functionParameter: {
            number1: { name: '數值 1', detail: '對應於總體的第一個數值參數。 ' },
            number2: { name: '數值 2', detail: '對應於總體的 2 到 254 個數值參數。 ' },
        },
    },
    VAR_S: {
        description: '估算以樣本為基礎的變異數（忽略樣本中的邏輯值和文字）。 ',
        abstract: '基於樣本估算變異數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/var-s-%E5%87%BD%E6%95%B0-913633de-136b-449d-813e-65a00b2b990b',
            },
        ],
        functionParameter: {
            number1: { name: '數值 1', detail: '對應於總體樣本的第一個數值參數。 ' },
            number2: { name: '數值 2', detail: '對應於總體樣本的 2 到 254 個數值參數。 ' },
        },
    },
    VARA: {
        description: '基於樣本（包括數字、文字和邏輯值）估算變異數',
        abstract: '以樣本為基礎（包括數字、文字和邏輯值）估算變異數',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/vara-%E5%87%BD%E6%95%B0-3de77469-fa3a-47b4-85fd-81758a1e1d07',
            },
        ],
        functionParameter: {
            value1: { name: '值 1', detail: '對應於總體樣本的第一個值參數。 ' },
            value2: { name: '值 2', detail: '對應於總體樣本的 2 到 254 個值參數' },
        },
    },
    VARPA: {
        description: '基於樣本總體（包括數字、文本和邏輯值）計算標準差',
        abstract: '基於樣本總體（包括數字、文本和邏輯值）計算標準偏差',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/varpa-%E5%87%BD%E6%95%B0-59a62635-4e89-4fad-88ac-ce4dc0513b96',
            },
        ],
        functionParameter: {
            value1: { name: '值 1', detail: '對應於總體的第一個值參數。 ' },
            value2: { name: '值 2', detail: '對應於總體的 2 到 254 個值參數' },
        },
    },
    WEIBULL_DIST: {
        description: '返回 Weibull 分佈',
        abstract: '返回 Weibull 分佈',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/weibull-dist-%E5%87%BD%E6%95%B0-4e783c39-9325-49be-bbc9-a83ef82b45db',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    Z_TEST: {
        description: '傳回 z 檢定的單尾機率值',
        abstract: '傳回 z 檢定的單尾機率值',
        links: [
            {
                title: '教導',
                url: 'https://support.microsoft.com/zh-tw/office/z-test-%E5%87%BD%E6%95%B0-d633d5a3-2031-4614-a016-92180ad82bee',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
};
