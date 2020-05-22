export interface TypeInfo {
    name: string,
    id: number
}

export interface Option {
    optionId: number;
    optionContent: string;
}

export interface MatrixOption {
    matrixId: number;
    matrixContent: string;
}

export interface Question {
    id: number;
    typeId: number;
    name: string;
    score: number;
    mustFill: boolean;
    options?: Option[];
    iconCount?: number;
    iconType?: string;
    matrixOptions?: MatrixOption[];
}
export interface Questionnaire {
    title: string;
    index?: number;
    describe: string;
    id: number;
    createDate: Date;
    isLocked: boolean;
    isShowGreeting: boolean;
    isTop: boolean;
    questionList: Question[];
}