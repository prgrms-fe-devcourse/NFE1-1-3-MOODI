import MainPage from '@/pages/MainPage';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import MyDiaryListPage from '@/pages/MyDiaryListPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import { DiaryWritePage } from '@/pages/DiaryWritePage';
import SignPage from '@/pages/SignPage/SignPage';
import MyPage from '@/pages/MyPage/MyPage';
import { DetailPage } from '@/pages/DetailPage';

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
                path: '/diaryWrite/:date',
                element: <DiaryWritePage />
            },
            {
                path: '/join',
                element: <SignPage />
            },
            {
                path: '/my-page',
                element: <MyPage />
            },
            {
                path: '/detail/:id',
                element: <DetailPage />
            }
        ]
    }
]);

export default router;
