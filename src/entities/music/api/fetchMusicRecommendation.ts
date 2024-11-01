import { createGptRequestQuery } from '../lib/createGptRequestQuery';
import { gptAnswerType, MoodDataType } from '../model/type';
import { fetchGptRecommend } from './fetchGptRecommend';

/**
 * 음악 아이텝을 반환합니다.
 * @param emotionData d
 * @param param1
 * @returns
 */
export const fetchMusicRecommendation = async (
    emotionData: MoodDataType | null,
    {
        onSuccess,
        onError,
        onValidationError
    }: {
        onSuccess: (data: gptAnswerType) => void;
        onError: () => void;
        onValidationError: () => void;
    }
) => {
    if (!emotionData) {
        onValidationError();
        return;
    }
    try {
        const requestQuery = createGptRequestQuery(emotionData);
        const recommendedMusic = await fetchGptRecommend(requestQuery);
        onSuccess(recommendedMusic);
    } catch (error) {
        onError();
        throw error;
    }
};
