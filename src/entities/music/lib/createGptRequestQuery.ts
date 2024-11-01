import { gptQueryParamsType, MoodDataType } from '../model/type';

// 테스트 다이러리
const INITIAL_DIARY = {
    title: '우울해',
    content: '너무 우울해서 빵샀어'
};

/**
 * 감정데이터, 일기데이터를 조합해 쿼리 데이터를 생성
 * @param emotionData
 * @returns
 */
export const createGptRequestQuery = (
    emotionData: MoodDataType
): gptQueryParamsType => {
    return {
        title: INITIAL_DIARY.title,
        content: INITIAL_DIARY.content,
        ...(emotionData?.mood && { mood: emotionData.mood }),
        ...(emotionData?.emotion && { emotion: emotionData.emotion }),
        ...(emotionData?.subEmotion && {
            subemotion: emotionData.subEmotion.filter(
                (emotion): emotion is string => emotion !== null
            )
        })
    };
};
