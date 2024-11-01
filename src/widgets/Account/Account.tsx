import React, { useState } from 'react';
import Title from '@/shared/ui/Title/Title';
import Info from '@/shared/ui/Info/Info';
import Margin from '@/shared/ui/Margin/Margin';
import InputForm from '@/shared/ui/InputForm/InputForm';
import Button from '@/shared/ui/Button/Button';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';
import Span from '@/shared/ui/Span/Span';
import { AccountStyled } from './Account.styled';

const Account = () => {
    const { addToast } = useToastStore();
    const [name, setName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    return (
        <AccountStyled>
            <Title isLoading={false}>아이디 / 비밀번호 찾기</Title>
            <Info isLoading={false}>무디와 일기쓰고 노래 추천 받기</Info>
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
            <InputForm
                label="휴대폰번호"
                value={phoneNumber}
                width="500px"
                height="52px"
                onChange={setPhoneNumber}
                placeholder="휴대폰 번호를 입력해주세요"
            />
            <Margin bottom={63} />
            <Button
                height="44px"
                width="500px"
                fontSize="16px"
                onClick={() => {
                    addToast('조회하기', 'success');
                }}
            >
                조회하기
            </Button>
        </AccountStyled>
    );
};

export default Account;
