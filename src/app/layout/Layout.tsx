import Header from '@/widgets/header/ui/Header';
import { Outlet } from 'react-router-dom';
import AuthProvider from '../AuthProvider';
import MoveTopButton from '@/shared/ui/MoveTopButton/MoveTopButton';

const Layout = () => {
    return (
        <div>
            <AuthProvider>
                <Header />
                <Outlet />
                <MoveTopButton />
            </AuthProvider>
        </div>
    );
};

export default Layout;
