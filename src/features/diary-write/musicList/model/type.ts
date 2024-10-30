export interface MusicItem {
    youtubeId: string;
    thumbnailUrl: string;
    title: string;
    artist: string;
}

export interface MusicCardListProps {
    type: string; // 리스트 타입
    responseMusicList: string[];
    onChange: (music: MusicItem) => void;
}
