import Button from '@/shared/ui/Button/Button';
import { Container } from './EditLabe.styled';

export const EditLabel = () => {
    return (
        <Container>
            <Button fontSize="14px" height="35px" width="70px" hasBorder>
                수정 중
            </Button>
        </Container>
    );
};
