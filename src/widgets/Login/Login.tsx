import React, { useState } from 'react';
import Title from '@/shared/ui/Title/Title';
import Info from '@/shared/ui/Info/Info';
import Margin from '@/shared/ui/Margin/Margin';
import InputForm from '@/shared/ui/InputForm/InputForm';
import Button from '@/shared/ui/Button/Button';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';
import { ButtonStyled, LoginStyled } from './Login.styled';
import Span from '@/shared/ui/Span/Span';

const Login = () => {
    const { addToast } = useToastStore();
    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <LoginStyled>
            <Title isLoading={false}>로그인</Title>
            <Info isLoading={false}>무디와 일기쓰고 노래 추천 받기</Info>
            <Margin bottom={70} />
            <InputForm
                label="아이디 입력 (영문, 숫자 6~20자)"
                value={id}
                width="500px"
                height="52px"
                onChange={setId}
                placeholder="아이디 입력 (영문, 숫자 6~20자)"
            />
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
            <Margin bottom={63} />
            <ButtonStyled>
                <Button
                    height="44px"
                    hasBorder
                    width="240px"
                    fontSize="16px"
                    onClick={() => {
                        addToast('회원가입', 'success');
                    }}
                >
                    회원가입
                </Button>
                <Button
                    height="44px"
                    width="240px"
                    fontSize="16px"
                    onClick={() => {
                        addToast('즐겁다', 'success');
                    }}
                >
                    로그인
                </Button>
            </ButtonStyled>
            <Margin bottom={28} />
            <Span isCenter>계정을 잃어버리셨나요?</Span>
        </LoginStyled>
    );
};

export default Login;
