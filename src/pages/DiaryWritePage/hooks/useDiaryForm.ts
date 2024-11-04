import { useState } from 'react';
import {
    DiaryDescDataType,
    MoodDataType,
    MusicItem
} from '@/entities/music/model/type';

export const useDiaryForm = () => {
    const [userDiaryState, setUserDiaryState] =
        useState<DiaryDescDataType | null>(null);
    const [userEmotionState, setUserEmotionState] =
        useState<MoodDataType | null>(null);
    const [selectedMusic, setSelectedMusic] = useState<MusicItem | null>(null);

    const validators = {
        isDiaryValid: (diary: DiaryDescDataType | null): boolean => {
            if (!diary) return false;
            return Boolean(
                diary.title?.trim() &&
                    diary.content?.trim() &&
                    typeof diary.isPublic === 'boolean'
            );
        },

        isEmotionValid: (emotion: MoodDataType | null): boolean => {
            if (!emotion) return false;
            if (!emotion.mood || !emotion.emotion) return false;
            return (
                typeof emotion.mood === 'string' &&
                typeof emotion.emotion === 'string' &&
                emotion.mood.trim().length > 0 &&
                emotion.emotion.trim().length > 0
            );
        },

        isMusicValid: (music: MusicItem | null): boolean => {
            if (!music) return false;
            return Boolean(
                music.youtubeId?.trim() &&
                    music.title?.trim() &&
                    music.artist?.trim()
            );
        }
    };

    return {
        userDiaryState,
        userEmotionState,
        selectedMusic,
        setUserDiaryState,
        setUserEmotionState,
        setSelectedMusic,
        validators
    };
};
