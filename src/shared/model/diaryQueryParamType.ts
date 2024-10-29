export interface DiaryQueryParamsType {
    page?: number;
    limit?: number;
    user_email?: string;
    is_public?: 0 | 1;
    sort_by?: 'latest';
    month?: number;
    year?: number;
}
