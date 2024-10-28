import styled from 'styled-components';

export const InputContainer = styled.div<{
    width: string;
}>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width};
    font-family: 'Pretendard', sans-serif;
`;

export const StyledLabel = styled.label`
    color: #bdbdbd;
`;

export const ErrorMessage = styled.span`
    color: #ff4949;
`;

export const LableContainer = styled.div`
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
`;

export const StyledInput = styled.input<{
    height: string;
}>`
    height: ${(props) => props.height};
    width: calc(100% - 32px);
    padding: 0 16px;
    font-size: 16px;
    color: #000000;
    border-radius: 13px;
    border: 1px solid #e0e0e0;
    font-family: 'Pretendard', sans-serif;

    &::placeholder {
        color: #00000040;
    }

    &:focus {
        outline: none;
    }
`;

export const StyledSelect = styled.select<{
    height: string;
}>`
    height: ${(props) => props.height};
    width: 100%;
    padding: 0 16px;
    font-size: 16px;
    color: #000000;
    border-radius: 13px;
    border: 1px solid #e0e0e0;
    font-family: 'Pretendard', sans-serif;

    &:focus {
        outline: none;
    }
`;

export const StyledTextarea = styled.textarea<{
    height: string;
}>`
    height: ${(props) => props.height};
    width: calc(100% - 32px);
    padding: 16px 16px;
    font-size: 16px;
    color: #000000;
    border-radius: 13px;
    border: 1px solid #e0e0e0;
    font-family: 'Pretendard', sans-serif;
    overflow: auto;
    resize: none;

    &::placeholder {
        color: #00000040;
    }

    &:focus {
        outline: none;
    }
`;

export const TogglePasswordButton = styled.button`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
`;

export const StyledImg = styled.img`
    height: 20px; // 아이콘 높이
    width: 20px; // 아이콘 너비
    cursor: pointer; // 아이콘 클릭 가능하도록 설정
`;
