export const handleTileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = (event.target as HTMLElement).closest(
        '.custom-tile-content'
    );
    const id = target?.getAttribute('data-id');

    if (id) {
        alert(`${id}로 이동`);
    } else {
        alert('해당 날짜에 데이터가 없습니다.');
    }
};

const getTileContent = ({ date }: { date: Date }) => {
    const dateString = moment(date).format('YYYY-MM-DD');
    const matchedEntry = fetchedData.find(
        (entry) => entry.created_date === dateString
    );

    if (matchedEntry) {
        const emotionPath = matchedEntry.emotion
            ? getEmoticonPath(matchedEntry.emotion)
            : 'img/emoji/default.svg';
        return <DateInnerContent emotion={emotionPath} id={matchedEntry.id} />;
    }
    return null; // 해당 날짜와 일치하는 데이터가 없으면 null 반환
};
