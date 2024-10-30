export interface InputFormProps {
    label: string;
    value: string;
    placeholder?: string;
    width: string;
    height: string;
    hasError?: boolean;
    errorMessage?: string;
    isPassword?: boolean; // 비밀번호 필드 여부
    isTextarea?: boolean; // 본문 입력 여부
    isDropdown?: boolean; // 드롭다운 여부
    options?: string[]; // 드롭다운 옵션
    onChange: (value: string) => void; // 값 변경 시 호출되는 함수
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void; // 엔터키 이벤트
}
