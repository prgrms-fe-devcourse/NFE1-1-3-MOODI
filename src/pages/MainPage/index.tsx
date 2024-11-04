import CalendarContainer from '../../widgets/calendar-container/CalendarContainer';
import TimelineContainer from '../../widgets/timeline-container/TimelineContainer';
import MoveTopButton from '@/shared/ui/MoveTopButton/MoveTopButton';
import { TimeLineListWrapper } from './indexCss';

const MainPage = () => {
    return (
        <>
            <CalendarContainer />
            <TimeLineListWrapper>
                <TimelineContainer
                    titleTarget="다른 사용자들"
                    sort="lastest"
                    email=""
                />
            </TimeLineListWrapper>
            <MoveTopButton />
        </>
    );
};

export default MainPage;
