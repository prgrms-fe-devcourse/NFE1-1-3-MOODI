export const fetchData = async ({ id: number; created_date: string; emotion: string | null }[]) => {
    try {
        const response = await fetch(
            'https://td3axvf8x7.execute-api.ap-northeast-2.amazonaws.com/moodi/diary?limit=30&user_email=annawa6@naver.com.com&year=2024&month=10'
        );
        if (!response.ok) {
            throw new Error('데이터를 가져오는데 실패했습니다.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
