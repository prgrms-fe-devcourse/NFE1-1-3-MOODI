import React from 'react';
import { OverlayStyled } from './Overlay.styled';

interface OverlayProps {
    children: React.ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
    return <OverlayStyled>{children}</OverlayStyled>;
};

export default Overlay;
