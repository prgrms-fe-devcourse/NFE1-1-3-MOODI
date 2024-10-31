import React, { useState } from 'react';
import { EmotionButtonGroupProps } from '../model/type';
import {
    Container,
    EmotionButtonContainer,
    MainKeywordContainer,
    SubKeywordContainer,
    SubContainer
} from './EmotionButtonGroup.styled';
import EmotionButtonList from '@/shared/EmotionButtonList/ui/EmotionButtonList';
import { KeywordButton } from '@/entities/KeywordButton/ui/KeywordButton';
import { Emotions } from '@/shared/model/EmotionEnum';

export const EmotionButtonGroup: React.FC<EmotionButtonGroupProps> = ({
    initialKeywords = [null, null, null, null, null],
    onKeywordsChange
}) => {
    const [keywords, setKeywords] =
        useState<(Emotions | null)[]>(initialKeywords);
    const [activeButton, setActiveButton] = useState(0);

    const handleClickKeyword = (index: number) => {
        setActiveButton(index);
        setKeywords((prevKeywords) => {
            const newKeywords = [...prevKeywords];
            newKeywords[index] = null;
            if (onKeywordsChange) {
                onKeywordsChange(newKeywords); // 키워드 변화 이벤트 호출
            }
            return newKeywords;
        });
    };

    const handleClickEmotion = (selectedEmotions: Emotions[]) => {
        const newEmotion = selectedEmotions[0];

        if (keywords[activeButton] !== newEmotion) {
            setKeywords((prevKeywords) => {
                const newKeywords = [...prevKeywords];
                newKeywords[activeButton] = newEmotion;
                if (onKeywordsChange) {
                    onKeywordsChange(newKeywords); // 키워드 변화 이벤트 호출
                }
                return newKeywords;
            });

            setActiveButton(activeButton !== 4 ? activeButton + 1 : 0);
        }
    };

    return (
        <EmotionButtonContainer>
            <Container>
                <MainKeywordContainer>
                    대표 키워드
                    <KeywordButton
                        selectedEmotion={keywords[0]}
                        isActive={activeButton === 0}
                        onClick={() => handleClickKeyword(0)}
                    />
                </MainKeywordContainer>
                <SubKeywordContainer>
                    서브 키워드
                    <SubContainer>
                        {[1, 2, 3, 4].map((index) => (
                            <KeywordButton
                                key={index}
                                selectedEmotion={keywords[index]}
                                isActive={activeButton === index}
                                onClick={() => handleClickKeyword(index)}
                            />
                        ))}
                    </SubContainer>
                </SubKeywordContainer>
            </Container>
            <EmotionButtonList
                onSelectionChange={handleClickEmotion}
                maxSelections={1}
                isPrimary
                initialSelectedEmotions={
                    keywords[activeButton] ? [keywords[activeButton]] : []
                }
            />
        </EmotionButtonContainer>
    );
};
