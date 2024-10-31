import React from 'react';
import { Title } from './LandingTitle.styled';

interface LandingTitleProps {
    title: string;
}

const LandingTitle = ({ title }: LandingTitleProps) => {
    return <Title>{title}</Title>;
};

export default LandingTitle;
