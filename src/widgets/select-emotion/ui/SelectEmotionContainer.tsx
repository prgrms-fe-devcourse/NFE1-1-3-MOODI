import { SelectEmotionContainerProps } from '../model/type';
import { Container } from './SelectEmotionContainer.styled';

export const SelectEmotionContainer = ({
    onEmotionSelect
}: SelectEmotionContainerProps) => {
    return <Container>감정 선택 위젯</Container>;
};
