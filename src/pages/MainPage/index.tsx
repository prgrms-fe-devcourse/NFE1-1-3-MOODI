import CalendarContainer from '../../widgets/calendar-container/CalendarContainer';
import TimelineContainer from '../../widgets/timeline-container/TimelineContainer';
import MoveTopButton from '@/shared/ui/MoveTopButton/MoveTopButton';
import { TimeLineListWrapper } from './indexCss';
import { useAuthStore } from '@/features/login/hooks/useAuthStore';

const MainPage = () => {
    const { email, userName, isLoggedin, setUserInfo } = useAuthStore();
    return (
        <>
            {isLoggedin && <CalendarContainer />}
            <TimeLineListWrapper>
                <TimelineContainer
                    titleTarget="다른 사용자들"
                    sort="lastest"
                    email=""
                    ispublic="1"
                />
            </TimeLineListWrapper>
            <MoveTopButton />
        </>
    );
};

export default MainPage;
