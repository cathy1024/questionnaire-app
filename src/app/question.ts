export interface Question {
    title: string;
    id: number;
    QuestionnaireId: number;
    CreateDate: string;
    UpdateDate: string;
    IsLocked: boolean;
    IsPublic: boolean;
    IsClosed: boolean;
    QuestionnaireType: number;
    IsShowGreeting: boolean;
    IsAdminTop: boolean;
    IsTop: boolean
}