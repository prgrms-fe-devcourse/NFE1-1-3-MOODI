import styled from 'styled-components';
import { SkeletonProps } from '@/shared/model/skeletonPropsTpye';

export const InfoStyled = styled.h4<SkeletonProps>`
    margin-top: 12px;
    font-size: 20px;
    color: #a4a4a4;
    @media (max-width: 768px) {
        font-size: 16px;
    }
    @media (max-width: 480px) {
        font-size: 12px;
    }
`;
