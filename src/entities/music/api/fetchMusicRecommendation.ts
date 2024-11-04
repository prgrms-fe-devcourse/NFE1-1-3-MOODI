// import { createGptRequestQuery } from '../lib/createGptRequestQuery';
import { gptAnswerType, gptQueryParamsType } from '../model/type';
import { fetchGptRecommend } from './fetchGptRecommend';

/**
 * 음악 아이텝을 반환합니다.
 * @param emotionData d
 * @param param1
 * @returns
 */
export const fetchMusicRecommendation = async (
    combinedData: gptQueryParamsType | null,
    {
        onSuccess,
        onError,
        onValidationError,
        onLoadingChange
    }: {
        onSuccess: (data: gptAnswerType) => void;
        onError: () => void;
        onValidationError: () => void;
        onLoadingChange?: (isLoading: boolean) => void;
    }
) => {
    if (!combinedData) {
        onValidationError();
        return;
    }
    try {
        onLoadingChange?.(true);
        const recommendedMusic = await fetchGptRecommend(combinedData);
        onSuccess(recommendedMusic);
    } catch (error) {
        onError();
        throw error;
    } finally {
        onLoadingChange?.(false); // 로딩 종료
    }
};
