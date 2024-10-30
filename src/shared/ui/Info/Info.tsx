import React, { ReactNode } from 'react';
import { InfoStyled } from './Info.styeld';

interface InfoProps {
    children: ReactNode;
    isLoading: boolean;
}

const Info = ({ children, isLoading }: InfoProps) => {
    return <InfoStyled isLoading={isLoading}>{children}</InfoStyled>;
};

export default Info;
