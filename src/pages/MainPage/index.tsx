import DiaryListItem from '@/features/diary-list-item';

const item = {
    id: 31,
    title: '오늘 나의 일기',
    content:
        '신나는 제주도 여행 1일차다. 정말 신난다. 신나는 제주도 여행 신나는 제주도 여행 1일차다. 정말 신난다. 신나는 제주도 여행 신나는 제주도 여행 1일차다. 정말 신난다. 신나는 제주도 여행 신나는 제주도 여행 1일차다. 정말 신난다. 신나는 제주도 여행 신나는 제주도 여행 1일차다. 정말 신난다. 신나는 제주도 여행 신나는 제주도 여행 1일차다. 정말 신난다. 신나는 제주도 여행',
    is_public: 1,
    music_url: 'http://example.com/music.mp3',
    mood: '매우 나쁨',
    emotion: '자신 있어요',
    sub_emotion: '{"sub_mood": "행복", "intensity": 8}',
    created_date: '2024-10-27T07:12:33.000Z',
    updated_date: '2024-10-28T03:39:36.000Z',
    author_email: 'alice.wonder@example.com',
    reactions: [
        {
            id: 34,
            type: '화나요',
            user_email: 'alice.wonder@example.com',
            created_at: '2024-10-24T03:58:35.000Z'
        }
    ]
};

const MainPage = () => {
    return <DiaryListItem data={item} />;
};

export default MainPage;
