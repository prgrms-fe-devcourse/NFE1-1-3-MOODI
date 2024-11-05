import React from 'react';
import GlobalStyles from './styles/globalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ToastContainer from '@/features/Toast/ui/ToastContainer';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import MyDiaryListPage from '@/pages/MyDiaryListPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <ToastContainer />
            <MyDiaryListPage />
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
};

export default App;
