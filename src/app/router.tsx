import MainPage from '@/pages/MainPage';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import MyDiaryListPage from '@/pages/MyDiaryListPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import SignPage from '@/pages/SignPage/SignPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/diary',
                element: <MyDiaryListPage />
            },
            {
                path: '/join',
                element: <SignPage />
            }
        ]
    }
]);

export default router;
