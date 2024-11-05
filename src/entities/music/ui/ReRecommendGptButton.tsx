import { ReRecommendGptButtonProps } from '../model/type';
import { Container, StyledImg } from './ReRecommendGptButton.styled';

export const ReRecommendGptButton = ({
    onClick
}: ReRecommendGptButtonProps) => {
    return (
        <Container onClick={onClick}>
            <StyledImg src="/repeatarrow.svg" />
        </Container>
    );
};
