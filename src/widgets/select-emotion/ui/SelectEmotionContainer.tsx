import { ConditionButtonGroup } from '@/features/diary-write';
import {
    INITIAL_MOOD_STATE,
    MoodState,
    SelectEmotionContainerProps
} from '../model/type';
import { ButtonContainer, Container } from './SelectEmotionContainer.styled';
import { EmotionButtonGroup } from '@/features/diary-write/emotion/ui/EmotionButtonGroup';
import { useEffect, useState } from 'react';
import { ConditionType } from '@/shared/model/conditionTypes';
import Button from '@/shared/ui/Button/Button';
import { Emotions, getEmotionInfo } from '@/shared/model/EmotionEnum';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';

export const SelectEmotionContainer = ({
    onMoodSelect,
    onNext,
    isActive,
    disabled,
    initialmood,
    initialemotion,
    initialsubemotions
}: SelectEmotionContainerProps) => {
    const { addToast } = useToastStore();
    const [moodState, setMoodState] = useState<MoodState>({
        mood: initialmood,
        emotion: initialemotion,
        subEmotions: initialsubemotions
    });

    const handleConditionChange = (condition: ConditionType) => {
        setMoodState((prev) => {
            const newState = {
                ...prev,
                mood: condition
            };
            onMoodSelect(newState);
            return newState;
        });
    };

    const handleEmotionChange = (emotion: (Emotions | null)[]) => {
        const korEmotion = emotion.map((item) => {
            if (!item) return null;
            try {
                const info = getEmotionInfo(item);
                return info.description;
            } catch (error) {
                addToast('감정 변환 에러.', 'error');
                return null;
            }
        });

        setMoodState((prev) => {
            const newState = {
                ...prev,
                emotion: korEmotion[0],
                subEmotions: korEmotion.slice(1)
            };
            onMoodSelect(newState);
            return newState;
        });
    };

    const getInitialKeywords = (): (Emotions | null)[] => {
        const defaultKeywords = Array(5).fill(null);
        if (!initialemotion && !initialsubemotions) {
            return defaultKeywords;
        }
        const convertToEmotions = (
            emotionStr: string | null | undefined
        ): Emotions | null => {
            if (!emotionStr) return null;

            return (
                Object.values(Emotions).find(
                    (emotion) =>
                        getEmotionInfo(emotion).description === emotionStr
                ) || null
            );
        };
        const emotions = [
            convertToEmotions(initialemotion),
            ...(initialsubemotions?.map((emotion) =>
                convertToEmotions(emotion)
            ) || [])
        ].filter((emotion): emotion is Emotions => emotion !== null);
        return [...emotions, ...Array(5 - emotions.length).fill(null)];
    };

    return (
        <Container>
            <ConditionButtonGroup
                selectedCondition={moodState.mood || null}
                onConditionChange={handleConditionChange}
            />
            <EmotionButtonGroup
                initialKeywords={getInitialKeywords()}
                onKeywordsChange={handleEmotionChange}
            />
        </Container>
    );
};
