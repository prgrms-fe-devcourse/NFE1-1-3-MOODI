import { ConditionButtonGroup } from '@/features/diary-write';
import {
    INITIAL_MOOD_STATE,
    MoodState,
    SelectEmotionContainerProps
} from '../model/type';
import { ButtonContainer, Container } from './SelectEmotionContainer.styled';
import { EmotionButtonGroup } from '@/features/diary-write/emotion/ui/EmotionButtonGroup';
import { useState } from 'react';
import { ConditionType } from '@/shared/model/conditionTypes';
import Button from '@/shared/ui/Button/Button';
import { Emotions, getEmotionInfo } from '@/shared/model/EmotionEnum';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';

export const SelectEmotionContainer = ({
    onMoodSelect,
    onNext
}: SelectEmotionContainerProps) => {
    const { addToast } = useToastStore();
    const [moodState, setMoodState] = useState<MoodState>(INITIAL_MOOD_STATE);

    const isNextButtonActive = (): boolean => {
        return !!(
            moodState.mood &&
            (moodState.emotion ||
                moodState.subEmotion.some((emotion) => emotion !== null))
        );
    };

    const handleConditionChange = (condition: ConditionType) => {
        setMoodState((prev) => ({
            ...prev,
            mood: condition
        }));
    };

    const handleEmotionChange = (emotion: (Emotions | null)[]) => {
        const korEmotion = emotion.map((item) => {
            if (!item) {
                return null;
            }
            try {
                const info = getEmotionInfo(item);
                return info.description;
            } catch (error) {
                addToast('감정 변환 에러.', 'error');
                return null;
            }
        });
        setMoodState((prev) => ({
            ...prev,
            emotion: korEmotion[0], // 첫 번째는 메인 감정
            subEmotions: korEmotion.slice(1) // 나머지는 서브 감정
        }));
    };

    const handleButtonClick = () => {
        if (isNextButtonActive()) {
            onMoodSelect(moodState);
            onNext?.(moodState);
        } else {
            addToast('데이터를 모두 입력해주세요!', 'warning');
        }
    };

    return (
        <Container>
            <ConditionButtonGroup
                selectedCondition={moodState.mood}
                onConditionChange={handleConditionChange}
            />
            <EmotionButtonGroup
                initialKeywords={[null, null, null, null, null]}
                onKeywordsChange={handleEmotionChange}
            />
            <ButtonContainer>
                <Button
                    borderradius="10px"
                    fontSize="16px"
                    height="60px"
                    isActive
                    hasBorder
                    onClick={() => {}}
                    width="200px"
                >
                    이전
                </Button>
                <Button
                    borderradius="10px"
                    fontSize="16px"
                    height="60px"
                    isActive={isNextButtonActive()}
                    onClick={() => {
                        handleButtonClick();
                    }}
                    width="200px"
                >
                    다음
                </Button>
            </ButtonContainer>
        </Container>
    );
};
