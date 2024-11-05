import { useState } from 'react';
import { fetchMusicRecommendation } from '@/entities/music';
import { gptAnswerType, MoodDataType } from '@/entities/music/model/type';
import { DiaryDescDataType } from '@/shared/model/diaryType';

export const useMusicRecommendation = () => {
    const [recommendedMusicList, setRecommendedMusicList] =
        useState<gptAnswerType>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchRecommendations = async (
        diaryData: DiaryDescDataType | null,
        emotionData: MoodDataType | null,
        onError: (message: string) => void
    ) => {
        if (!diaryData || !emotionData) {
            onError('일기와 감정 데이터가 유효하지 않습니다.');
            return;
        }

        const combinedData = {
            ...(diaryData?.title && { title: diaryData.title }),
            ...(diaryData?.content && { content: diaryData.content }),
            ...(emotionData?.mood && { mood: emotionData.mood }),
            ...(emotionData?.emotion && { emotion: emotionData.emotion }),
            ...(emotionData?.subEmotions && {
                subemotion: emotionData.subEmotions.filter(
                    (emotion): emotion is string => emotion !== null
                )
            })
        };

        await fetchMusicRecommendation(combinedData, {
            onSuccess: setRecommendedMusicList,
            onError: () => onError('음악 추천 요청에 실패했습니다.'),
            onValidationError: () => onError('먼저 감정을 선택해주세요!'),
            onLoadingChange: setIsLoading
        });
    };

    return {
        recommendedMusicList,
        fetchRecommendations,
        isLoading
    };
};
