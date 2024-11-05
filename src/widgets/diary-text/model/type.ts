export interface DiaryTextProps {
    titleDate: string;
    title: string;
    author: string;
    updateDate: string;
    diaryContent: string;
    isPublic: boolean;
    onVisibilityChange: (newVisibility: boolean) => void;
}
