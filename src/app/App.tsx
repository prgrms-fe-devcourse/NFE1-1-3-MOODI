import React from 'react';
import GlobalStyles from './styles/globalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
        </QueryClientProvider>
    );
};

export default App;
