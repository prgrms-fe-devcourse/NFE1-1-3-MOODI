import ScrollDot from '@/shared/ui/ScrollDot/ScrollDot';
import React from 'react';
import { ScrollDotContainerProps } from '../model/type';
import { ScrollDotContainerStyled } from './SrollDotContainer.styled';

const ScrollDotContainer = ({ dots }: ScrollDotContainerProps) => {
    return (
        <ScrollDotContainerStyled>
            {dots.map((dot) => (
                <ScrollDot key={Date.now()} isActive={dot.isActive} />
            ))}
        </ScrollDotContainerStyled>
    );
};

export default ScrollDotContainer;
