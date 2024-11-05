import { ReRecommendGptButtonProps } from '../model/type';
import { Container, StyledImg } from './ReRecommendGptButton.styled';
import repeatarrow from '@/shared/assets/repeatarrow.svg';

export const ReRecommendGptButton = ({
    onClick
}: ReRecommendGptButtonProps) => {
    return (
        <Container onClick={onClick}>
            <StyledImg src={repeatarrow} />
        </Container>
    );
};
