import { DiaryDescDataType } from '@/shared/model/diaryType';

export interface WriteDiaryContainerProps {
    onDiarySubmit: (data: DiaryDescDataType) => void;
    initialDate?: Date;
    isActive: boolean;
    disabled: boolean;
    initialTitle?: string;
    initialContent?: string;
    initialIsPublic?: boolean;
    // onDiarySubmit: (diaryData: {
    //     selectedDate: Date;
    //     title: string;
    //     content: string;
    //     isPublic: boolean;
    // }) => void;
}
