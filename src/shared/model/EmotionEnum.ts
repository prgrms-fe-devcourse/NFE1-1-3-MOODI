export enum Emotions {
    Happy = 'Happy',
    Confident = 'Confident',
    Grateful = 'Grateful',
    Comfortable = 'Comfortable',
    Fun = 'Fun',
    Excited = 'Excited',
    Satisfied = 'Satisfied',
    Lovely = 'Lovely',
    Not_sure = 'Not_sure',
    Embarrassed = 'Embarrassed',
    Surprised = 'Surprised',
    Blank = 'Blank',
    Sad = 'Sad',
    Depressed = 'Depressed',
    Disappointed = 'Disappointed',
    Regret = 'Regret',
    Annoyed = 'Annoyed',
    Angry = 'Angry',
    Lonely = 'Lonely',
    Shocked = 'Shocked',
    Awkward = 'Awkward'
}

const emotionDescriptions: Record<Emotions, string> = {
    [Emotions.Happy]: '기뻐요',
    [Emotions.Confident]: '자신있어요',
    [Emotions.Grateful]: '감사해요',
    [Emotions.Comfortable]: '편안해요',
    [Emotions.Fun]: '신이나요',
    [Emotions.Excited]: '즐거워요',
    [Emotions.Satisfied]: '만족스러워요',
    [Emotions.Lovely]: '사랑스러워요',
    [Emotions.Not_sure]: '모르겠어요',
    [Emotions.Embarrassed]: '부끄러워요',
    [Emotions.Surprised]: '놀라워요',
    [Emotions.Blank]: '아무 생각이 없어요',
    [Emotions.Sad]: '슬퍼요',
    [Emotions.Depressed]: '우울해요',
    [Emotions.Disappointed]: '실망스러워요',
    [Emotions.Regret]: '후회돼요',
    [Emotions.Annoyed]: '짜증나요',
    [Emotions.Angry]: '화나요',
    [Emotions.Lonely]: '외로워요',
    [Emotions.Shocked]: '충격받았어요',
    [Emotions.Awkward]: '곤란해요'
};

const imageBasePath = '/emoji';

export const getEmotionInfo = (emotion: Emotions) => {
    const description = emotionDescriptions[emotion] || '알 수 없음';
    const emotionName = emotion.toLowerCase();
    const imagePath = `${imageBasePath}/emoji_${emotionName}.svg`;
    return { description, imagePath };
};
