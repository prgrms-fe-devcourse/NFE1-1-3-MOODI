import React from 'react';
import GlobalStyles from './styles/globalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Calendar from '../features/calendar/index';

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <Calendar />
        </QueryClientProvider>
    );
};

export default App;
