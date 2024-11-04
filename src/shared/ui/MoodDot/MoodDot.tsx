import React from 'react';
import { DotStyled } from './MoodDot.styled';
import { MoodDotProps } from './MoodDot.type';

const MoodDot = ({ isActive, mood }: MoodDotProps) => {
    return <DotStyled isActive={isActive} mood={mood} />;
};

export default MoodDot;
