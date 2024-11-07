import React, { useState, useEffect } from 'react';
import Title from '@/shared/ui/Title/Title';
import Info from '@/shared/ui/Info/Info';
import Margin from '@/shared/ui/Margin/Margin';
import InputForm from '@/shared/ui/InputForm/InputForm';
import Button from '@/shared/ui/Button/Button';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';
import Span from '@/shared/ui/Span/Span';
import { MypageSpan, ButtonStyled, MypageStyled } from './Mypage.styled';
import useGetUser from '@/features/myPage/hook/useGetUser';
import { useAuthStore } from '@/features/login/hooks/useAuthStore';
import usePatch from '@/features/myPage/hook/usePatch';
import { useNavigate } from 'react-router-dom';
import { validateForm } from './util/validator';

const Mypage = () => {
    const { addToast } = useToastStore();
    const { email, userName, setUserInfo } = useAuthStore();
    const { data, isLoading, error } = useGetUser({ email });
    const { mutate } = usePatch();
    const [name, setName] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            setName(data.username || 'TEST');
            setGender(data.gender || '남성');
            setPhoneNumber(data.phone_number || '010-1111-1111');
        }
    }, [data]);

    const handleUpdate = () => {
        const isValid = validateForm(email, password, phoneNumber, addToast);

        if (!isValid) return;

        mutate({
            email,
            username: name,
            password,
            gender,
            phone_number: phoneNumber
        });
    };

    return (
        <MypageStyled>
            <Margin top={120} />
            <Title isLoading={isLoading}>{`안녕하세요 ${userName}님`}</Title>
            <Info
                isLoading={isLoading}
            >{`${userName}님의 계정 정보를 확인하세요`}</Info>
            <Margin bottom={70} />
            <InputForm
                label="이름"
                value={name}
                width="100%"
                height="52px"
                onChange={setName}
                placeholder="이름을 입력해주세요"
            />
            <Margin bottom={25} />
            <Span>성별</Span>
            <MypageSpan>{gender}</MypageSpan>
            <Margin bottom={30} />
            <InputForm
                label="핸드폰 번호"
                value={phoneNumber}
                width="100%"
                height="52px"
                onChange={setPhoneNumber}
                placeholder="전화번호를 입력해주세요"
                isPhoneNumber
            />
            <Margin bottom={25} />
            <Span>이메일</Span>
            <MypageSpan>{email}</MypageSpan>
            <Margin bottom={25} />
            <InputForm
                label="비밀번호"
                isPassword
                value={password}
                width="100%"
                height="52px"
                onChange={setPassword}
                placeholder="비밀번호 입력 (문자, 숫자, 특수문자 8~20자)"
            />
            <Margin bottom={93} />
            <ButtonStyled>
                <Button
                    height="44px"
                    hasBorder
                    width="240px"
                    fontSize="16px"
                    onClick={() => {
                        setUserInfo('', '', false);
                        navigate('/');
                        addToast('로그아웃', 'success');
                    }}
                >
                    로그아웃
                </Button>
                <Button
                    height="44px"
                    width="240px"
                    fontSize="16px"
                    onClick={handleUpdate}
                >
                    수정하기
                </Button>
            </ButtonStyled>
            <Margin bottom={28} />
        </MypageStyled>
    );
};

export default Mypage;
