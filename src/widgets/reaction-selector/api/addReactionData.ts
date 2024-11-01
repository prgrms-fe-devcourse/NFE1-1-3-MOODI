import { DiaryType } from '../../../shared/model/diaryType';

export const fetchReactionData = async (
    diaryId: number
): Promise<DiaryType | null> => {
    const apiBaseUrl = `https://td3axvf8x7.execute-api.ap-northeast-2.amazonaws.com/moodi/diary/${diaryId}`;
    try {
        const response = await fetch(`${apiBaseUrl}`);

        if (!response.ok) {
            throw new Error('데이터를 가져오는데 실패했습니다.');
        }
        const data: DiaryType = await response.json();

        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
