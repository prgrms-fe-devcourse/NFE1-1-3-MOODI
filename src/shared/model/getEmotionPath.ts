// 감정별 SVG 파일 import
import emojiHappy from '@/shared/assets/emoji/emoji_happy.svg';
import emojiConfident from '@/shared/assets/emoji/emoji_confident.svg';
import emojiGrateful from '@/shared/assets/emoji/emoji_grateful.svg';
import emojiComfortable from '@/shared/assets/emoji/emoji_comfortable.svg';
import emojiExcited from '@/shared/assets/emoji/emoji_excited.svg';
import emojiFun from '@/shared/assets/emoji/emoji_fun.svg';
import emojiSatisfied from '@/shared/assets/emoji/emoji_satisfied.svg';
import emojiLovely from '@/shared/assets/emoji/emoji_lovely.svg';
import emojiNotSure from '@/shared/assets/emoji/emoji_not_sure.svg';
import emojiEmbarrassed from '@/shared/assets/emoji/emoji_embarrassed.svg';
import emojiSurprised from '@/shared/assets/emoji/emoji_surprised.svg';
import emojiBlank from '@/shared/assets/emoji/emoji_blank.svg';
import emojiSad from '@/shared/assets/emoji/emoji_sad.svg';
import emojiDepressed from '@/shared/assets/emoji/emoji_depressed.svg';
import emojiDisappointed from '@/shared/assets/emoji/emoji_disappointed.svg';
import emojiRegret from '@/shared/assets/emoji/emoji_regret.svg';
import emojiAnnoyed from '@/shared/assets/emoji/emoji_annoyed.svg';
import emojiAngry from '@/shared/assets/emoji/emoji_angry.svg';
import emojiLonely from '@/shared/assets/emoji/emoji_lonely.svg';
import emojiShocked from '@/shared/assets/emoji/emoji_shocked.svg';
import emojiAwkward from '@/shared/assets/emoji/emoji_awkward.svg';

// 감정에 따른 SVG 매핑 객체
const emotionMap: Record<string, string> = {
    기뻐요: emojiHappy,
    '자신 있어요': emojiConfident,
    감사해요: emojiGrateful,
    편안해요: emojiComfortable,
    신이나요: emojiExcited,
    즐거워요: emojiFun,
    만족스러워요: emojiSatisfied,
    사랑스러워요: emojiLovely,
    모르겠어요: emojiNotSure,
    부끄러워요: emojiEmbarrassed,
    놀라워요: emojiSurprised,
    '아무생각이 없어요': emojiBlank,
    슬퍼요: emojiSad,
    우울해요: emojiDepressed,
    실망스러워요: emojiDisappointed,
    후회돼요: emojiRegret,
    짜증나요: emojiAnnoyed,
    화나요: emojiAngry,
    외로워요: emojiLonely,
    충격받았어요: emojiShocked,
    곤란해요: emojiAwkward
};

// 이모티콘 경로 반환 함수
export const getEmoticonPath = (emotion: string): string | null => {
    return emotionMap[emotion] || null;
};
