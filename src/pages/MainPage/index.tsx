import Header from '@/widgets/header/ui/Header';
import CalendarContainer from './container/calendar-container/CalendarContainer';
import TimelineContainer from './container/timeline-container/TimelineContainer';
import MoveTopButton from '@/shared/ui/MoveTopButton/MoveTopButton';

const MainPage = () => {
    return (
        <>
            <Header />
            <CalendarContainer />
            <TimelineContainer />
            <MoveTopButton />
        </>
    );
};

export default MainPage;
