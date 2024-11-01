export interface WriteDiaryContainerProps {
    onDiarySubmit: (data: {
        selectedDate: Date;
        title: string;
        content: string;
        isPublic: boolean;
    }) => void;
    initialDate?: Date;
}
