import { ReactNode } from 'react';
import { createBrowserRouter, Navigate, useLocation } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import Layout from './layout/Layout';
import MyDiaryListPage from '@/pages/MyDiaryListPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import { DiaryWritePage } from '@/pages/DiaryWritePage';
import SignPage from '@/pages/SignPage/SignPage';
import MyPage from '@/pages/MyPage/MyPage';
import { DetailPage } from '@/pages/DetailPage';
import AccountPage from '@/pages/AccountPage/AccountPage';
import { LandingPage } from '@/pages/LandingPage';

interface ProtectedRouteProps {
    children: ReactNode;
}

interface PublicRouteProps {
    children: ReactNode;
}

// 보호된 라우트 (로그인 필요)
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const Authenticated = localStorage.getItem('token');

    if (Authenticated === '' || !Authenticated) {
        return <Navigate to="/landing" replace />;
    }

    return children;
};

// 공개 라우트 (로그인/비로그인 모두 접근 가능)
const PublicRoute = ({ children }: PublicRouteProps) => {
    const Authenticated = localStorage.getItem('token');
    const location = useLocation();

    // 로그인된 사용자가 landing 페이지에 접근하면 메인으로 리다이렉트
    if (location.pathname === '/landing' && Authenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
};

// 초기 진입 처리를 위한 컴포넌트
const RootRoute = ({ children }: { children: ReactNode }) => {
    const Authenticated = localStorage.getItem('token');
    const location = useLocation();

    // 첫 진입시에만 landing으로 리다이렉트 (다른 경로에서 /로 이동할 때는 리다이렉트 하지 않음)
    if (
        location.pathname === '/' &&
        location.key === 'default' &&
        (Authenticated === '' || !Authenticated)
    ) {
        return <Navigate to="/landing" replace />;
    }

    return children;
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: (
                    <RootRoute>
                        <MainPage />
                    </RootRoute>
                )
            },
            {
                path: '/landing',
                element: (
                    <PublicRoute>
                        <LandingPage />
                    </PublicRoute>
                )
            },
            {
                path: '/login',
                element: (
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                )
            },
            {
                path: '/join',
                element: (
                    <PublicRoute>
                        <SignPage />
                    </PublicRoute>
                )
            },
            {
                path: '/diary',
                element: (
                    <ProtectedRoute>
                        <MyDiaryListPage />
                    </ProtectedRoute>
                )
            },
            {
                path: '/diaryWrite/:date',
                element: (
                    <ProtectedRoute>
                        <DiaryWritePage />
                    </ProtectedRoute>
                )
            },
            {
                path: '/my-page',
                element: (
                    <ProtectedRoute>
                        <MyPage />
                    </ProtectedRoute>
                )
            },
            {
                path: '/detail/:id',
                element: (
                    <ProtectedRoute>
                        <DetailPage />
                    </ProtectedRoute>
                )
            },
            {
                path: '/account',
                element: (
                    <ProtectedRoute>
                        <AccountPage />
                    </ProtectedRoute>
                )
            }
        ]
    }
]);

export default router;
