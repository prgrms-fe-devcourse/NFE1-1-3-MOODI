import React from 'react';
import { ShowMoodContainerProps } from '../model/type';
import {
    Container,
    MoodContainer,
    DotContainer,
    SubContainer
} from './ShowMoodContainer.styled';
import MoodDot from '@/shared/ui/MoodDot/MoodDot';

export const ShowMoodContainer = ({ mood }: ShowMoodContainerProps) => {
    const dotActive = {
        '매우 좋음': [true, true, true, true, true],
        좋음: [true, true, true, true, false],
        보통: [true, true, true, false, false],
        나쁨: [true, true, false, false, false],
        '매우 나쁨': [true, false, false, false, false]
    };

    const activeDots = mood
        ? dotActive[mood]
        : [false, false, false, false, false];

    return (
        <Container>
            기분상태
            <SubContainer>
                <MoodContainer>
                    <DotContainer>
                        <MoodDot isActive={activeDots[0]} mood={mood} />
                        <MoodDot isActive={activeDots[1]} mood={mood} />
                        <MoodDot isActive={activeDots[2]} mood={mood} />
                        <MoodDot isActive={activeDots[3]} mood={mood} />
                        <MoodDot isActive={activeDots[4]} mood={mood} />
                    </DotContainer>
                    {mood}
                </MoodContainer>
            </SubContainer>
        </Container>
    );
};
