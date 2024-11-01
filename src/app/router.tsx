import MainPage from '@/pages/MainPage';
import Header from '@/widgets/header/ui/Header';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            {
                path: '/',
                element: <MainPage />
            }
        ]
    }
]);

export default router;
