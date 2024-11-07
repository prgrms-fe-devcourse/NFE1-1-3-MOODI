import React, { useState } from 'react';
import Title from '@/shared/ui/Title/Title';
import Info from '@/shared/ui/Info/Info';
import Margin from '@/shared/ui/Margin/Margin';
import InputForm from '@/shared/ui/InputForm/InputForm';
import Button from '@/shared/ui/Button/Button';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';
import {
    AccountStyled,
    ModalStyled,
    ModalInfoStyled,
    ModalTitle
} from './Account.styled';
import getEmail from '@/features/account/api/getEmail';
import useModal from '@/shared/hooks/useModal';
import { GetEmailResponseType } from '@/features/account/model/getEmailResponseType';

const Account = () => {
    const { addToast } = useToastStore();
    const [name, setName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const { ModalComponent, openModal } = useModal();
    const [data, setData] = useState<GetEmailResponseType>({
        email: '',
        password: ''
    });
    const handleSearch = async () => {
        if (name === '' || phoneNumber === '') {
            addToast('이름과 번호를 입력해주세요', 'warning');
            return;
        }
        try {
            const response = await getEmail({
                name,
                phone_number: phoneNumber
            });
            setData(response);
            openModal();
            addToast('조회 성공', 'success');
        } catch (error) {
            if (error instanceof Error) {
                addToast(error.message, 'error');
            }
        }
    };

    return (
        <>
            <AccountStyled>
                <Margin top={120} />
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
                    isPhoneNumber
                />
                <Margin bottom={63} />
                <Button
                    height="44px"
                    width="500px"
                    fontSize="16px"
                    onClick={handleSearch}
                >
                    조회하기
                </Button>
            </AccountStyled>
            <ModalComponent>
                <ModalStyled>
                    <ModalTitle>회원님의 이메일/비밀번호는 </ModalTitle>
                    <p>{data.email}</p>
                    <p>{data.password}</p>
                    <ModalTitle>입니다.</ModalTitle>
                </ModalStyled>
            </ModalComponent>
        </>
    );
};

export default Account;
