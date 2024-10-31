import React from 'react';
import { DotStyled } from './ScrollDot.styled';
import { ScrollDotProps } from './ScrollDot.type';

const ScrollDot = ({ isActive }: ScrollDotProps) => {
    return <DotStyled isActive={isActive} />;
};

export default ScrollDot;
