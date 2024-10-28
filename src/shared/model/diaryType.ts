import { SubEmotion } from '@/shared/model/subEmotionType';
import { Reaction } from '@/shared/model/reactionType';

interface Diary {
    id: number;
    title: string;
    content: string;
    is_public: number;
    music_url: string;
    mood: string;
    emotion: string;
    sub_emotion: SubEmotion;
    created_date: string;
    updated_date: string;
    author_email: string;
    reactions: Reaction[];
}

export default Diary;
