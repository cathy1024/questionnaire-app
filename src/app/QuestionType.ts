export interface Questionnaire {
    title: string;
    describe: string;
    id: number;
    createDate: Date;
    isShowGreeting: boolean;
    isTop: boolean;
}

export interface Option {
    optionId: number;
    optionContent: string;
}

export interface Question {
    id: number;
    typeId: number;
    name: string;
    score: number;
    mustFill: boolean;
    options: Option[];
}
