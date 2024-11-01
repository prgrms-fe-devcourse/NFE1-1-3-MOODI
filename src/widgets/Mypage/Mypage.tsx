import React, { useState } from 'react';
import Title from '@/shared/ui/Title/Title';
import Info from '@/shared/ui/Info/Info';
import Margin from '@/shared/ui/Margin/Margin';
import InputForm from '@/shared/ui/InputForm/InputForm';
import Button from '@/shared/ui/Button/Button';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';
import Span from '@/shared/ui/Span/Span';
import { MypageSpan, ButtonStyled, MypageStyled } from './Mypage.styled';

interface Mypage {
    userName?: string;
    userEmail?: string;
    gender?: string;
}

const Mypage = ({
    userName = 'TEST',
    userEmail = 'TEST@naver.com',
    gender = '남성'
}: Mypage) => {
    const { addToast } = useToastStore();
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <MypageStyled>
            <Title isLoading={false}>{`안녕하세요 ${userName}님`}</Title>
            <Info
                isLoading={false}
            >{`${userName}님의 게정 정보를 확인하세요`}</Info>
            <Margin bottom={70} />
            <InputForm
                label="이름"
                value={name}
                width="500px"
                height="52px"
                onChange={setName}
                placeholder="이름을 입력해주세요"
            />
            <Margin bottom={25} />
            <Span>성별</Span>
            <MypageSpan>{gender}</MypageSpan>
            <Margin bottom={30} />
            <Span>아이디</Span>
            <MypageSpan>{userEmail}</MypageSpan>
            <Margin bottom={25} />
            <InputForm
                label="비밀번호"
                isPassword
                value={password}
                width="500px"
                height="52px"
                onChange={setPassword}
                placeholder="비밀번호 입력 (문자, 숫자, 특수문자 8~20자"
            />
            <Margin bottom={93} />
            <ButtonStyled>
                <Button
                    height="44px"
                    hasBorder
                    width="240px"
                    fontSize="16px"
                    onClick={() => {
                        addToast('로그아웃', 'success');
                    }}
                >
                    로그아웃
                </Button>
                <Button
                    height="44px"
                    width="240px"
                    fontSize="16px"
                    onClick={() => {
                        addToast('수정하기', 'success');
                    }}
                >
                    수정하기
                </Button>
            </ButtonStyled>
            <Margin bottom={28} />
            <Span isCenter>탈퇴하기</Span>
        </MypageStyled>
    );
};

export default Mypage;
