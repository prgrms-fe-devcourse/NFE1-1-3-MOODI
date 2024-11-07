export interface InputFormProps {
    label: string;
    value: string;
    placeholder?: string;
    width: string;
    height: string;
    hasError?: boolean;
    errorMessage?: string;
    isPassword?: boolean;
    isDropdown?: boolean;
    isTextarea?: boolean;
    isPhoneNumber?: boolean;
    options?: string[];
    onChange: (value: string) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    maxLength?: number;
}
