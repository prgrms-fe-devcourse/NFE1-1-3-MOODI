import Header from '@/widgets/header/ui/Header';
import { Outlet } from 'react-router-dom';
import AuthProvider from '../AuthProvider';

const Layout = () => {
    return (
        <div>
            <AuthProvider>
                <Header />
                <Outlet />
            </AuthProvider>
        </div>
    );
};

export default Layout;
