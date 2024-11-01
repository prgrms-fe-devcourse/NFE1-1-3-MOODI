import styled from 'styled-components';

interface SpanStlyedType {
    isCenter?: boolean;
}

export const SpanStlyed = styled.span<SpanStlyedType>`
    display: block;
    font-size: 12px;
    color: #bdbdbd;
    text-align: ${({ isCenter }) => (isCenter === true ? 'center' : 'left')};
`;
