import React, { useState } from 'react';
import Title from '@/shared/ui/Title/Title';
import Info from '@/shared/ui/Info/Info';
import Margin from '@/shared/ui/Margin/Margin';
import InputForm from '@/shared/ui/InputForm/InputForm';
import Button from '@/shared/ui/Button/Button';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';
import Span from '@/shared/ui/Span/Span';
import { IdContainerStyled, SignStyled } from './Sign.styled';

const Sign = () => {
    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const { addToast } = useToastStore();

    return (
        <SignStyled>
            <Title isLoading={false}>아이디 / 비밀번호 찾기</Title>
            <Info isLoading={false}>무디와 일기쓰고 노래 추천 받기</Info>
            <Margin bottom={93} />
            <InputForm
                label="이름"
                value={name}
                width="500px"
                height="52px"
                onChange={setName}
                placeholder="이름을 입력해주세요"
            />
            <Margin bottom={25} />
            <InputForm
                label="성별"
                value={gender}
                width="500px"
                height="52px"
                onChange={setGender}
                placeholder="성별을 선택"
                isDropdown
            />
            <Margin bottom={25} />
            <InputForm
                label="휴대폰번호"
                value={phoneNumber}
                width="500px"
                height="52px"
                onChange={setPhoneNumber}
                placeholder="휴대폰 번호를 입력해주세요"
            />
            <Margin bottom={25} />
            <IdContainerStyled>
                <InputForm
                    label="아이디"
                    value={id}
                    width="383px"
                    height="52px"
                    onChange={setId}
                    placeholder="아이디 입력 (영문, 숫자 6~20자)"
                />
                <Button
                    height="52px"
                    width="110px"
                    fontSize="16px"
                    hasBorder
                    onClick={() => {
                        addToast('조회하기', 'success');
                    }}
                >
                    중복확인
                </Button>
            </IdContainerStyled>
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
            <Margin bottom={25} />
            <InputForm
                label="비밀번호 확인"
                value={phoneNumber}
                width="500px"
                height="52px"
                onChange={() => {
                    addToast('조회하기', 'success');
                }}
                placeholder="비밀번호 확인"
                errorMessage="잘못된 비밀번호 입니다."
            />
            <Margin bottom={58} />
            <Button
                height="52px"
                width="500px"
                fontSize="16px"
                onClick={() => {
                    addToast('조회하기', 'success');
                }}
            >
                회원가입
            </Button>
        </SignStyled>
    );
};

export default Sign;
