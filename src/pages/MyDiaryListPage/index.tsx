import EmotionChart from '@/features/chart/ui/EmotionChart';
import TimelineContainer from '@/widgets/timeline-container/TimelineContainer';
import { PickSort, MyDiaryListWrapper } from './indexCss';
import { useEffect, useState } from 'react';

const MyDiaryListPage = () => {
    const [sortState, setSortState] = useState('lastest');
    useEffect(() => {
        console.log(sortState);
    }, [sortState]);
    return (
        /* eslint-disable jsx-a11y/click-events-have-key-events */
        <div>
            <EmotionChart userName="홍길동" userEmail="perfectTest@naver.com" />
            <MyDiaryListWrapper>
                <PickSort sortState={sortState}>
                    <div
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                            setSortState('lastest');
                        }}
                    >
                        작성날짜순
                    </div>
                    <div
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                            setSortState('');
                        }}
                    >
                        일기날짜순
                    </div>
                </PickSort>
                <TimelineContainer
                    titleTarget="나"
                    sort={sortState}
                    email="perfectTest@naver.com"
                />
            </MyDiaryListWrapper>
        </div>
    );
};

export default MyDiaryListPage;
