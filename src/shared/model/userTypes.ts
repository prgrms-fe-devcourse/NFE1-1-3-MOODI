export interface GetUserByEmailParamsType {
    email: string;
}

export interface UserType {
    username: string;
    email: string;
    password: string;
    gender: string;
    phone_number: string;
    created_at: string;
}

export interface GetUserByEmailResponseType {
    user: UserType;
}

export interface PatchUserParmasType {
    email: string;
    username: string;
    password: string;
    gender: string;
    phone_number: string;
}

export interface PatchUserResponseType {
    message: string;
}
