import Header from '@/widgets/header/ui/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
