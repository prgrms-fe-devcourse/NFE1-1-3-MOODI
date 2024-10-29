import React from 'react';
import { StyledTitle } from './Title.styled';
import { TitleProps } from './Title.types';

const Title = ({ title }: TitleProps) => {
    return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
