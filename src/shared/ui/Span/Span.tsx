import React, { ReactNode } from 'react';
import { SpanStlyed } from './Span.styled';

interface SpanProps {
    children: ReactNode;
    isCenter?: boolean;
}

const Span: React.FC<SpanProps> = ({ children, isCenter = false }) => {
    return <SpanStlyed isCenter={isCenter}>{children}</SpanStlyed>;
};

export default Span;
