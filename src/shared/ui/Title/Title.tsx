import React from 'react';
import { StyledTitle } from './Title.styled';
import { TitleProps } from './Title.types';

const Title = ({ children }: TitleProps) => {
    return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
