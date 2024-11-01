import React from 'react';
import GlobalStyles from './styles/globalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ToastContainer from '@/features/Toast/ui/ToastContainer';
import MainPage from '@/pages/MainPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <ToastContainer />
            <MainPage />
        </QueryClientProvider>
    );
};

export default App;
