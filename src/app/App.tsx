import React from 'react';
import GlobalStyles from './styles/globalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainPage from '@/pages/MainPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <MainPage />
        </QueryClientProvider>
    );
};

export default App;
