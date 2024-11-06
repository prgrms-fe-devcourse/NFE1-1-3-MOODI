export const EMAIL_REG_EXP: RegExp =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const PHONE_NUMBER_REG_EXP: RegExp =
    /^(01[016789]-\d{3,4}-\d{4})$|^(0[2-8][0-5]?-?\d{3,4}-\d{4})$/;

export const PASSWORD_REG_EXP: RegExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/]).{8,20}$/;
