import React from 'react';
import cat from '@/shared/assets/cuteCat.gif';
import { ErrorPageStyled, ErrorTilte, ErrorImage } from './ErrorPage.styled';
import Margin from '@/shared/ui/Margin/Margin';
import Title from '@/shared/ui/Title/Title';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <ErrorPageStyled>
            <Margin top={160} />
            <ErrorImage src={`${cat}`} alt="logo" />
            <ErrorTilte>
                <Link to="/">404 Error Please Click Here </Link>
            </ErrorTilte>
        </ErrorPageStyled>
    );
};

export default ErrorPage;
