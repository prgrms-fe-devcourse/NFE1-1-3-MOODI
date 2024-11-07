import React from 'react';
import styled from 'styled-components';
import { SkeletonProps } from '@/shared/model/skeletonPropsTpye';

export const TitleStyled = styled.h3<SkeletonProps>`
    font-size: 32px;
    font-weight: bold;
    margin: 0px;
    @media (max-width: 768px) {
        font-size: 28px;
    }
    @media (max-width: 480px) {
        font-size: 24px;
    }
`;
