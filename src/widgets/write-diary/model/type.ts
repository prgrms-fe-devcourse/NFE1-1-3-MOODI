import { DiaryDescDataType } from '@/shared/model/diaryType';

export interface WriteDiaryContainerProps {
    onDiarySubmit: (data: DiaryDescDataType) => void;
    initialDate?: Date;
    isActive: boolean;
    disabled: boolean;
    initialTitle: string;
    initialContent: string;
    initialIsPublic: boolean;
    initialData?: DiaryDescDataType | null;
    editTargetDate?: string;
    listType: string;
}
