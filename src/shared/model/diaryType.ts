import { SubEmotionType } from './subEmotionType';
import { ReactionType } from './reactionType';

export interface DiaryType {
    id: number;
    title: string;
    content: string;
    is_public: number;
    music_url: string;
    mood: string;
    emotion: string;
    sub_emotion: SubEmotionType;
    created_date: string;
    updated_date: string;
    author_email: string;
    reactions: ReactionType[];
}
