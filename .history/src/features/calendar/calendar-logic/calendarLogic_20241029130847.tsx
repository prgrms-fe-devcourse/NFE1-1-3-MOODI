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
