// src/utils/decodeJwtPayload.ts

/**
 * JWT 토큰의 페이로드를 디코딩하여 반환하는 함수
 * @param {string | null} token - 디코딩할 JWT 토큰
 * @returns {T | null} - JWT 페이로드를 디코딩한 결과
 */
export function decodeJwtPayload<T>(token: string | null): T | null {
    if (!token) return null;

    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
                .join('')
        );
        return JSON.parse(jsonPayload) as T;
    } catch (error) {
        return null;
    }
}
