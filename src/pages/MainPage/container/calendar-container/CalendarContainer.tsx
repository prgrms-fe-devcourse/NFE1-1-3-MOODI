import Calendar from '@/features/calendar';
import Title from '@/shared/ui/Title/Title';
import { Container } from './CalendarContainerCss';

const CalendarContainer = () => {
    return (
        <Container>
            <Title isLoading>달력에서 나의 일기를 확인해볼까요?</Title>
            <Calendar />
        </Container>
    );
};

export default CalendarContainer;
