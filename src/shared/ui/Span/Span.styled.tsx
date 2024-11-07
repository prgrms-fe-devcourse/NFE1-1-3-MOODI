import styled from 'styled-components';

interface SpanStlyedType {
    isCenter?: boolean;
}

export const SpanStlyed = styled.span<SpanStlyedType>`
    display: block;
    font-size: 12px;
    color: #bdbdbd;
    text-align: ${({ isCenter }) => (isCenter === true ? 'center' : 'left')};
    @media (max-width: 768px) {
        font-size: 10px;
    }
    @media (max-width: 480px) {
        font-size: 8px;
    }
`;
