import MainPage from '@/pages/MainPage';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainPage />
            }
        ]
    }
]);

export default router;
