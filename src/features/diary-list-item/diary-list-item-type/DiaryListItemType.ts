export interface ReactionType {
    id: number;
    type: string;
    user_email: string;
    created_at: string;
}

export interface SubEmotionType {
    sub_mood: string;
    intensity: number;
}

export interface DiaryListItemType {
    id: number;
    title: string;
    content: string;
    is_public: number;
    music_url: string;
    mood: string;
    emotion: string;
    sub_emotion: SubEmotionType | string; // string type needed if it's stored as JSON string
    created_date: string;
    updated_date: string;
    author_email: string;
    reactions: ReactionType[];
}
