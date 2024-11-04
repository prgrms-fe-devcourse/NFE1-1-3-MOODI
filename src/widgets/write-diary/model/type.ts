export interface WriteDiaryContainerProps {
    initialDate?: Date;
    initialTitle?: string;
    initialContent?: string;
    initialIsPublic?: boolean;
    onDiarySubmit: (diaryData: {
        selectedDate: Date;
        title: string;
        content: string;
        isPublic: boolean;
    }) => void;
}
