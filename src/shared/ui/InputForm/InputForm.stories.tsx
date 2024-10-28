import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import InputForm from './InputForm';

const meta: Meta<typeof InputForm> = {
    title: 'Shared/UI/InputForm',
    component: InputForm,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof InputForm>;

export const Default: Story = {
    args: {
        label: '아이디',
        placeholder: '아이디 입력 (영문, 숫자 6~20자)',
        width: '100%',
        height: '52px',
        hasError: false,
        errorMessage: '',
        value: '',
        onChange: () => console.log('input')
    }
};

export const Name: Story = {
    render: () => {
        const [name, setName] = useState('');
        const [isError, setIsError] = useState(true);

        const handleNameChange = (value: string) => {
            setName(value);
            console.log(value);
        };

        const nameCondition = (value: string) => {
            setIsError(/[a-zA-Z가-힣]+/.test(value));
        };

        return (
            <InputForm
                label="이름"
                value={name}
                placeholder="이름 입력"
                width="100%"
                height="52px"
                hasError={!isError}
                errorMessage="한 글자 이상 입력하세요."
                onChange={(value) => {
                    handleNameChange(value);
                    nameCondition(value);
                }}
            />
        );
    }
};

export const Id: Story = {
    render: () => {
        const [id, setId] = useState('');
        const [isError, setIsError] = useState(true);

        const handleIdChange = (value: string) => {
            setId(value);
            console.log(value);
        };

        const idCondition = (value: string) => {
            setIsError(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/.test(value));
        };

        return (
            <InputForm
                label="아이디"
                value={id}
                placeholder="아이디 입력 (영문, 숫자 6~20자)"
                width="100%"
                height="52px"
                hasError={!isError}
                errorMessage="아이디는 영문, 숫자 조합 6~20자입니다."
                onChange={(value) => {
                    handleIdChange(value);
                    idCondition(value);
                }}
            />
        );
    }
};

export const Password: Story = {
    render: () => {
        const [password, setPassword] = useState('');
        const [isError, setIsError] = useState(true);

        const handlePasswordChange = (value: string) => {
            setPassword(value);
            console.log(value);
        };

        const passwordCondition = (value: string) => {
            setIsError(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/.test(
                    value
                )
            );
        };

        return (
            <InputForm
                label="비밀번호"
                value={password}
                placeholder="비밀번호 입력 (영문, 숫자, 특수문자 8~20자)"
                width="100%"
                height="52px"
                hasError={!isError}
                isPassword={true}
                errorMessage="비밀번호는 영문, 숫자, 특수문자 조합 8~20자입니다."
                onChange={(value) => {
                    handlePasswordChange(value);
                    passwordCondition(value);
                }}
            />
        );
    }
};

export const GenderDropdown: Story = {
    render: () => {
        const [gender, setGender] = useState('');

        const handleGenderChange = (value: string) => {
            setGender(value);
            console.log(value);
        };

        return (
            <InputForm
                label="성별"
                value={gender}
                placeholder="성별을 선택"
                width="100%"
                height="52px"
                isDropdown={true}
                onChange={handleGenderChange}
            />
        );
    }
};

export const ContentInput: Story = {
    render: () => {
        const [content, setContent] = useState('');

        const handleContentChange = (value: string) => {
            setContent(value);
            console.log(value);
        };

        return (
            <InputForm
                label="내용"
                value={content}
                placeholder="내용을 입력해주세요."
                width="100%"
                height="400px"
                isTextarea={true}
                onChange={handleContentChange}
            />
        );
    }
};
