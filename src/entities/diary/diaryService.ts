import { postDiaryApi } from '@/shared/api/diary';
import { DiaryDescDataType, PostDiaryType } from '@/shared/model/diaryType';
import { MoodDataType, MusicItem } from '../music/model/type';

export const diaryService = {
    async submitDiary(diary: PostDiaryType) {
        try {
            await postDiaryApi(diary);
            return { success: true };
        } catch (error) {
            return { success: false, error };
        }
    },

    formatDiaryData(
        userDiaryState: DiaryDescDataType,
        userEmotionState: MoodDataType,
        selectedMusic: MusicItem,
        userEmail: string,
        date: string
    ): PostDiaryType {
        return {
            title: userDiaryState?.title || '',
            content: userDiaryState?.content || '',
            is_public: userDiaryState?.isPublic ?? false,
            music_url: selectedMusic?.youtubeId || '',
            author_email: userEmail,
            mood: userEmotionState?.mood || '',
            emotion: userEmotionState?.emotion || '',
            sub_emotion: userEmotionState?.subEmotions
                ? JSON.stringify(
                      userEmotionState.subEmotions.filter(
                          (emotion) => emotion !== null && emotion.trim() !== ''
                      )
                  )
                : '',
            date: date || '',
            music_title: selectedMusic?.title || '',
            music_imgurl: selectedMusic?.thumbnailUrl || '',
            artist: selectedMusic?.artist || '',
            music_id: selectedMusic?.youtubeId || ''
        };
    }
};
