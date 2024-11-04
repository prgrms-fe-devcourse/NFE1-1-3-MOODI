import { MusicItem } from '@/entities/music/model/type';

export interface SelectMusicContainerProps {
    onMusicSelect: (music: MusicItem | null) => void;
    gptRecommendMusicList: string[];
    isActive: boolean;
    disabled: boolean;
}
