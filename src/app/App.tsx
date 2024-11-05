import React from 'react';
import GlobalStyles from './styles/globalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ToastContainer from '@/features/Toast/ui/ToastContainer';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import ReactionSelector from '@/widgets/reaction-selector/ui/ReactionSelector';

const queryClient = new QueryClient();

const App: React.FC = () => {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pbmpvb24iLCJlbWFpbCI6ImFubmF3YTZAbmF2ZXIuY29tLmNvbSIsImlhdCI6MTczMDc3MjU3MiwiZXhwIjoxNzMwNzgzMzcyfQ.jOVHX1RsVVr0hYB9bF9E3CRL3cQzYb9bYr9b35AYFg0';

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <ToastContainer />
            {/* <RouterProvider router={router} /> */}
            <ReactionSelector
                diaryId={36}
                userEmail="annawa6@naver.com.com"
                isHorizontal
                isAddBtnVisible
                token={token}
            />
        </QueryClientProvider>
    );
};

export default App;
