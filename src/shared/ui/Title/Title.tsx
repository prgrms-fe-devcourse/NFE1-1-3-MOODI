import React from 'react';
import { TitleStyled } from './Title.styled';
import { TitleProps } from './Title.types';

const Title = ({ children, isLoading = false }: TitleProps) => {
    return <TitleStyled isLoading={isLoading}>{children}</TitleStyled>;
};

export default Title;
