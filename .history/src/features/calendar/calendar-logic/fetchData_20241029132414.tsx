export const fetchData = async (
    activeMonth: string,
    setFetchedDates: React.Dispatch<React.SetStateAction<string[]>>
) => {
    try {
        const response = await fetch(`API_URL?month=${activeMonth}`);
        if (!response.ok) {
            throw new Error('데이터를 가져오는데 실패했습니다.');
        }
        const data = await response.json();
        setFetchedDates(data); // 상태 업데이트 함수 호출
    } catch (error) {
        console.error(error);
    }
};
