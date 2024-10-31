import DiaryListItem from '@/features/diary-list-item';

const item = {
    id: 220,
    title: '개발일기2',
    content:
        '개발일기의 내용2개발일기의 내용2개발일기의 내용2개발일기의 내용2개발일기의 내용2개발일기의 내용2개발일기의 내용2개발일기의 내용2개발일기의 내용2개발일기의 내용2',
    is_public: 1,
    music_url: 'https://example.com/music.mp3',
    mood: '좋음',
    emotion: '감사해요',
    sub_emotion: null,
    created_date: '2024-11-10T11:48:50.000Z',
    updated_date: '2024-10-30T07:51:23.000Z',
    author_email: 'annawa6@naver.com.com',
    music_title: '노래제목',
    music_imgurl: 'https://avatars.githubusercontent.com/u/88082564?s=200&v=4',
    music_id: '노래아이디',
    artist: '가수',
    author_username: '김민준',
    reactions: []
};

const MainPage = () => {
    return <DiaryListItem data={item} />;
};

export default MainPage;
