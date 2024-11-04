export const getEmoticonPath = (emotion: string) => {
    const emotionMap: Record<string, string> = {
        기뻐요: 'emoji_happy',
        '자신 있어요': 'emoji_confident',
        감사해요: 'emoji_grateful',
        편안해요: 'emoji_comfortable',
        신이나요: 'emoji_excited',
        즐거워요: 'emoji_fun',
        만족스러워요: 'emoji_satisfied',
        사랑스러워요: 'emoji_lovely',
        모르겠어요: 'emoji_not_sure',
        부끄러워요: 'emoji_embarrassed',
        놀라워요: 'emoji_surprised',
        '아무생각이 없어요': 'emoji_blank',
        슬퍼요: 'emoji_sad',
        우울해요: 'emoji_depressed',
        실망스러워요: 'emoji_disappointed',
        후회돼요: 'emoji_regret',
        짜증나요: 'emoji_annoyed',
        화나요: 'emoji_angry',
        외로워요: 'emoji_lonley',
        충격받았어요: 'emoji_shocked',
        곤란해요: 'emoji_awkward'
    };

    const svgName = emotionMap[emotion];
    if (!svgName) {
        return null; // 매칭되는 감정이 없을 경우
    }

    return `emoji/${svgName}.svg`;
};
