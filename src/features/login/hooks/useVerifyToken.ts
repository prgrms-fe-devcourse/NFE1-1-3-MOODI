import { useAuthStore } from './useAuthStore';
import useLogout from './useLogout';
import defaultApi from '@/shared/api/api';

interface VerifyResponse {
    message: string;
    decoded: {
        username: string;
        email: string;
        iat: number;
        exp: number;
    };
}

const api = defaultApi();

const useVerifyToken = () => {
    const { setUserInfo } = useAuthStore();
    const { handleLogout } = useLogout();

    const verifyToken = async (token: string) => {
        try {
            console.log('Sending verify request with token:', token);
            const response = await api.get<VerifyResponse>('/verify', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Verify API full response:', response);
            if ('decoded' in response.data) {
                const { decoded } = response.data;
                setUserInfo(decoded.email, decoded.username, true);
                return true;
            }
            // 토큰 만료됨
            handleLogout();
            return false;
        } catch (error) {
            // API 호출 실패
            handleLogout();
            return false;
        }
    };

    return { verifyToken };
};

export default useVerifyToken;
