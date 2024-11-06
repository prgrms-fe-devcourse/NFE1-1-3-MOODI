import { MusicItem } from '@/entities/music/model/type';

export interface SelectMusicContainerProps {
    onMusicSelect: (music: MusicItem | null) => void;
    onRecommend: () => void;
    gptRecommendMusicList: string[];
    isActive: boolean;
    disabled: boolean;
    isLoading: boolean;
    initialData: MusicItem | null;
}
