import moment from 'moment';

export const handleTileClick = (
    date: Date,
    event: React.MouseEvent<HTMLButtonElement>,
    onNavigate: (path: string) => void
) => {
    const target = event.currentTarget.querySelector(
        '.custom-tile-content'
    ) as HTMLElement;
    const id = target?.getAttribute('data-id');
    const dateString = moment(date).format('YYYY-MM-DD');

    if (id) {
        onNavigate(`/diary/${id}`);
    } else {
        onNavigate(`/diaryWrite/${dateString}`);
    }
};

export const getActiveMonth = (
    activeStartDate: moment.MomentInput,
    setActiveMonth: React.Dispatch<React.SetStateAction<string>>
) => {
    const newActiveMonth = moment(activeStartDate).format('YYYY-MM');
    setActiveMonth(newActiveMonth);
};
