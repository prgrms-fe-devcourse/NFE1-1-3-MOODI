export const calendarDataFetch = async (
    activeMonth: string,
    userEmail: string
) => {
    const split = activeMonth.split('-');
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
        const response = await fetch(
            `${apiUrl}/diary?limit=40&user_email=${userEmail}&year=${split[0]}&month=${split[1]}`
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
