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
    options = ['남성', '여성'],
    onChange,
    onKeyDown
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
        onChange(e.target.value);
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
