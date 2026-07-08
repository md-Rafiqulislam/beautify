// form state type
export type TFormState = {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
};