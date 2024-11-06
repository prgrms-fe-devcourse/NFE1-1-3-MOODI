import { SubEmotionType } from './subEmotionType';
import { ReactionType } from './reactionType';

export interface DiaryData {
    title?: string;
    content?: string;
    date?: string;
    is_public?: boolean;
}

export interface EmotionData {
    mood?: string;
    emotion?: string;
    subEmotions?: (string | null)[];
}

export interface MusicData {
    id?: string;
    title?: string;
    url?: string;
    imgUrl?: string;
    artist?: string;
}

export interface DiaryType {
    id: number;
    title: string;
    content: string;
    is_public: boolean;
    music_url: string;
    mood: string;
    emotion: string;
    sub_emotion: string;
    date: string;
    created_date: string;
    updated_date: string;
    author_email: string;
    reactions: ReactionType[];
    music_id: string;
    music_title: string;
    music_imgurl: string;
    artist: string;
}

export interface PostDiaryType {
    title: string;
    content: string;
    is_public: boolean;
    mood: string;
    emotion: string;
    sub_emotion: SubEmotionType | string;
    date: string;
    author_email: string;
    music_url: string;
    music_title: string;
    music_imgurl: string;
    music_id: string;
    artist: string;
}

export interface putDiaryType {
    id: string;
    title: string;
    content: string;
    is_public: boolean;
    music_url: string;
    mood: string;
    emotion: string;
    author_email: string;

    sub_emotion: SubEmotionType | string;

    music_title: string;
    music_imgurl: string;
    music_id: string;
    artist: string;
}
export interface DiaryDescDataType {
    title: string;
    content: string;
    isPublic: boolean;
}
