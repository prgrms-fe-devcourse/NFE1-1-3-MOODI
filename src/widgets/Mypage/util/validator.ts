import {
    EMAIL_REG_EXP,
    PHONE_NUMBER_REG_EXP,
    PASSWORD_REG_EXP
} from './RegExp';

interface Validation {
    condition: boolean;
    message: string;
}
type ToastVariant = 'warning' | 'success' | 'error';

export function validateForm(
    email: string,
    password: string,
    phoneNumber: string,
    addToast: (message: string, type: ToastVariant) => void
): boolean {
    const validations: Validation[] = [
        {
            condition: !EMAIL_REG_EXP.test(email),
            message: '잘못된 이메일 형식입니다.'
        },
        {
            condition: !PASSWORD_REG_EXP.test(password),
            message: '잘못된 비밀번호 형식입니다.'
        },
        {
            condition: !PHONE_NUMBER_REG_EXP.test(phoneNumber),
            message: '잘못된 전화번호 형식입니다.'
        }
    ];

    const invalid = validations.some((validation) => {
        if (validation.condition) {
            addToast(validation.message, 'warning');
            return true;
        }
        return false;
    });

    return !invalid;
}
