export interface MusicItem {
    youtubeId: string;
    thumbnailUrl: string;
    title: string;
    artist: string;
}

export interface MusicCardListProps {
    type: string; // 리스트 타입
    responseMusicList: MusicItem[];
    // onChange: (music: MusicItem) => void;
}
