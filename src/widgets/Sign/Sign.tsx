// Sign.tsx
import React, { useState } from 'react';
import Title from '@/shared/ui/Title/Title';
import Info from '@/shared/ui/Info/Info';
import Margin from '@/shared/ui/Margin/Margin';
import InputForm from '@/shared/ui/InputForm/InputForm';
import Button from '@/shared/ui/Button/Button';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';
import { IdContainerStyled, SignStyled } from './Sign.styled';
import useCheckEmail from '@/features/join/hook/usecheckEmail';
import useJoin from '@/features/join/hook/useJoin';
import { validateForm } from './util/validator';
import { EMAIL_REG_EXP } from './util/RegExp';

const Sign = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [checkPassword, setCheckPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const { addToast } = useToastStore();
    const { checkEmail, isEmailAvailable } = useCheckEmail();
    const { mutate } = useJoin();

    const handleSignUp = () => {
        const isValid = validateForm(
            email,
            password,
            checkPassword,
            name,
            phoneNumber,
            gender,
            isEmailAvailable,
            addToast
        );
        if (isValid) {
            mutate({
                email,
                username: name,
                password,
                gender: gender as '남성' | '여성',
                phoneNumber
            });
        }
    };

    return (
        <SignStyled>
            <Margin top={120} />
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
                placeholder="010-1111-1111 형식으로 입력해주세요"
            />
            <Margin bottom={25} />
            <IdContainerStyled>
                <InputForm
                    label="이메일"
                    value={email}
                    width="383px"
                    height="52px"
                    onChange={setEmail}
                    placeholder="이메일 입력"
                />
                <Button
                    height="52px"
                    width="110px"
                    fontSize="16px"
                    hasBorder
                    onClick={() => {
                        if (email === '') {
                            addToast('이메일을 입력해주세요', 'warning');
                            return;
                        }
                        if (EMAIL_REG_EXP.test(email)) {
                            checkEmail(email);
                        } else {
                            addToast('잘못된 이메일 형식입니다.', 'warning');
                        }
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
                value={checkPassword}
                width="500px"
                height="52px"
                onChange={setCheckPassword}
                placeholder="비밀번호 확인"
                errorMessage="잘못된 비밀번호 입니다."
            />
            <Margin bottom={58} />
            <Button
                height="52px"
                width="500px"
                fontSize="16px"
                onClick={() => {
                    handleSignUp();
                }}
            >
                회원가입
            </Button>
            <Margin bottom={40} />{' '}
        </SignStyled>
    );
};

export default Sign;
