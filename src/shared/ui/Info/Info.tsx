import React, { ReactNode } from 'react';
import { InfoStyled } from './Info.styeld';

interface InfoProps {
    children: ReactNode;
}

const Info = ({ children }: InfoProps) => {
    return <InfoStyled>{children}</InfoStyled>;
};

export default Info;
