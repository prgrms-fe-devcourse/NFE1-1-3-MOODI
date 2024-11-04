import MainPage from '@/pages/MainPage';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import MyDiaryListPage from '@/pages/MyDiaryListPage';

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
                path: '/my-diary',
                element: <MyDiaryListPage />
            }
        ]
    }
]);

export default router;
