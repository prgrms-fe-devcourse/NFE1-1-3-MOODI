import useVerifyToken from '@/features/login/hooks/useVerifyToken';
import useLocalStorage from '@/shared/hooks/useLocalStorage';
import { ReactNode, useEffect } from 'react';

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthLayoutProps) => {
    const { storedValue: token } = useLocalStorage<string>('token', '');
    const { verifyToken } = useVerifyToken();

    useEffect(() => {
        const initializeAuth = async () => {
            if (token) {
                await verifyToken(token);
            }
        };
        initializeAuth();
    }, []);

    return children;
};

export default AuthProvider;
