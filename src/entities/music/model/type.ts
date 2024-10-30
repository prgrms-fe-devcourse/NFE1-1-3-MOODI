export interface MusicItem {
    youtubeId: string;
    thumbnailUrl: string;
    title: string;
    artist: string;
}

export interface MusicCardListProps {
    musicList: MusicItem[];
}

export interface MusicCardProps {
    youtubeId: string; // 유튜브 ID
    thumbnailUrl: string; // 스포티파이 썸네일
    title: string; // 곡 제목
    artist: string; // 곡 아티스트
    isPlaying?: boolean; // 재생 상태
    onPlay?: (youtubeId: string) => void; // 재생 함수
    onClick: () => void; // 클릭시 아이템 셋팅
}

export interface MusicListQueryParams {
    title: string;
    artist: string;
}

export interface SpotifyResponse {
    name: string;
    artists: Array<{ name: string }>;
    album: {
        images: Array<{ url: string }>;
    };
}

export interface YouTubeResponse {
    id: {
        videoId: string;
    };
}