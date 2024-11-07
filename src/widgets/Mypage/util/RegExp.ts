export const EMAIL_REG_EXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const PASSWORD_REG_EXP =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

export const PHONE_NUMBER_REG_EXP: RegExp =
    /^(01[016789]-\d{3,4}-\d{4})$|^(0[2-8][0-5]?-?\d{3,4}-\d{4})$/;
