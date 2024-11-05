import { useAuthStore } from '@/features/login/hooks/useAuthStore';
import useLogout from '@/features/login/hooks/useLogout';
import { decodeJwtPayload } from '@/features/login/util/decodeJwtPayload ';
import useLocalStorage from '@/shared/hooks/useLocalStorage';
import { ReactNode, useEffect } from 'react';

interface AuthLayoutProps {
    children: ReactNode;
}

interface userType {
    email: string;
    username: string;
}

// 토큰 만료 체크 테스트 함수

// 성공
function TestVerifyTokenTrue(token: string) {
    return true;
}
// 실패
function TestVerifyTokenFalse(token: string) {
    return false;
}

const AuthProvider = ({ children }: AuthLayoutProps) => {
    const { setUserInfo } = useAuthStore();
    const { storedValue: token } = useLocalStorage<string>('token', '');
    const { handleLogout } = useLogout();

    useEffect(() => {
        const initializeAuth = async () => {
            if (token) {
                try {
                    // await axios.get('/api/verify-token');
                    if (TestVerifyTokenTrue(token)) {
                        const payload = decodeJwtPayload<userType>(token);
                        if (payload) {
                            console.log('토큰 유효');
                            setUserInfo(payload.email, payload.username, true);
                        }
                    } else {
                        console.log('토큰 만료');
                        handleLogout();
                    }
                } catch {
                    console.log('토큰 없음');
                    handleLogout();
                }
            }
        };
        initializeAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return children;
};

export default AuthProvider;
