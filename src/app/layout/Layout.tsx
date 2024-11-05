import { useAuthStore } from '@/features/login/hooks/useAuthStore';
import { decodeJwtPayload } from '@/features/login/util/decodeJwtPayload ';
import useLocalStorage from '@/shared/hooks/useLocalStorage';
import Header from '@/widgets/header/ui/Header';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

interface UserInfo {
    email: string;
    userName: string;
    isLoggedin: boolean;
}

interface userType {
    email: string;
    username: string;
}

const Layout = () => {
    const { setUserInfo } = useAuthStore();
    const { storedValue } = useLocalStorage<string>('token', '');

    useEffect(() => {
        if (storedValue) {
            const payload = decodeJwtPayload<userType>(storedValue);
            if (payload) {
                setUserInfo(payload.email, payload.username, true);
            }
        }
    }, [setUserInfo, storedValue]);

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
