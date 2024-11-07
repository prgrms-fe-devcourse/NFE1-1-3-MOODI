import React, { useState } from 'react';
import { InputFormProps } from './InputForm.types';
import visbilty from '@/shared/assets/visibility.svg';
import visbiltyOff from '@/shared/assets/visibility_off.svg';
import {
    InputContainer,
    StyledLabel,
    StyledInput,
    LableContainer,
    StyledSelect,
    StyledTextarea,
    StyledImg,
    ErrorMessage,
    TogglePasswordButton
} from './InputForm.styled';

const InputForm = ({
    label,
    value,
    placeholder,
    width,
    height,
    hasError = false,
    errorMessage = '',
    isPassword = false,
    isDropdown = false,
    isTextarea = false,
    isPhoneNumber = false,
    options = ['남성', '여성'],
    onChange,
    onKeyDown,
    maxLength
}: InputFormProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        if (isPhoneNumber) {
            const formattedValue = e.target.value
                .replace(/[^0-9]/g, '') // 숫자만 허용
                .replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3'); // 형식 적용
            onChange(formattedValue);
        } else {
            onChange(e.target.value);
        }
    };

    return (
        <InputContainer width={width}>
            <LableContainer>
                <StyledLabel>{label}</StyledLabel>
                {hasError ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
            </LableContainer>
            {isDropdown && (
                <StyledSelect
                    height={height}
                    value={value}
                    onChange={handleInputChange}
                >
                    <option value="" disabled hidden>
                        {placeholder}
                    </option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </StyledSelect>
            )}
            {isTextarea && !isDropdown && (
                <StyledTextarea
                    value={value}
                    placeholder={placeholder}
                    height={height}
                    onChange={handleInputChange}
                    maxLength={maxLength}
                />
            )}
            {!isDropdown && !isTextarea && (
                <div style={{ position: 'relative' }}>
                    <StyledInput
                        type={
                            isPassword && !isPasswordVisible
                                ? 'password'
                                : 'text'
                        }
                        value={value}
                        placeholder={placeholder}
                        height={height}
                        onChange={handleInputChange}
                        onKeyDown={onKeyDown}
                        pattern={
                            isPhoneNumber ? '\\d{3}-\\d{3,4}-\\d{4}' : undefined
                        }
                        title="전화번호 형식은 010-1234-5678 입니다."
                        maxLength={maxLength}
                    />
                    {isPassword && (
                        <TogglePasswordButton
                            type="button"
                            onClick={handleTogglePasswordVisibility}
                            aria-label={
                                isPasswordVisible
                                    ? '비밀번호 숨기기'
                                    : '비밀번호 보이기'
                            }
                        >
                            <StyledImg
                                src={isPasswordVisible ? visbilty : visbiltyOff}
                                alt={
                                    isPasswordVisible
                                        ? '비밀번호 보이기'
                                        : '비밀번호 숨기기'
                                }
                            />
                        </TogglePasswordButton>
                    )}
                </div>
            )}
        </InputContainer>
    );
};

export default InputForm;
