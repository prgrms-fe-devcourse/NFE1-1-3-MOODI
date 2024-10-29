import React from 'react';
import {
    PageContainer,
    LandingContainer,
    SubTitleContainer
} from './Page.styled';
import LandingTitle from '../LandingTitle/LandingTitle';
import SubTitle from '../SubTitle/SubTitle';
import Button from '../../../../shared/ui/Button/Button';
import Header from '../../../../widgets/header/ui/Header';

export const LandingPage = () => {
    const handleLoginClick = () => {
        // eslint-disable-next-line no-console
        console.log('click login button!');
    };

    return (
        <PageContainer>
            <Header />
            <LandingContainer>
                <LandingTitle title={`Life's Playlist, \nYour Story`} />
            </LandingContainer>
            <SubTitleContainer>
                <SubTitle subTitle="무디에서 감정을 담은 일기를 작성해보세요." />
            </SubTitleContainer>
            <Button
                height="79px"
                width="247px"
                fontSize="20px"
                borderradius="15px"
                onClick={handleLoginClick}
            >
                로그인 하기
            </Button>
        </PageContainer>
    );
};
