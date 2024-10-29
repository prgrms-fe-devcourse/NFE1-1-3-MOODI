import React, { useState } from 'react';
import { StyledEmotionButtonList } from './EmotionButtonList.styled';
import EmotionButton from '../../../shared/EmotionButton/ui/EmotionButton';
import { Emotions } from '../../../shared/model/EmotionEnum';

interface EmotionListProps {
    onSelectionChange: (selectedEmotions: Emotions[]) => void; // prop 추가
}

/** 게시글에 대한 반응을 나타내기 위한 버튼입니다. */
const EmotionList = ({ onSelectionChange }: EmotionListProps) => {
    const [selectedEmotions, setSelectedEmotions] = useState<Emotions[]>([]);

    const handleEmotionClick = (emotion: Emotions) => {
        setSelectedEmotions((prev) => {
            const newSelection = prev.includes(emotion)
                ? prev.filter((e) => e !== emotion)
                : [...prev, emotion];

            onSelectionChange(newSelection);
            return newSelection;
        });
    };

    return (
        <StyledEmotionButtonList>
            {Object.values(Emotions).map((emotion) => (
                <EmotionButton
                    key={emotion}
                    emotion={emotion}
                    initialClicked={selectedEmotions.includes(emotion)}
                    onClick={() => handleEmotionClick(emotion)}
                />
            ))}
        </StyledEmotionButtonList>
    );
};

export default EmotionList;
