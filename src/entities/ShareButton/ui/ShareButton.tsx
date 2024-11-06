import React from 'react';
import { StyledButton, StyledImg } from './ShareButton.styled';
import share from '@/shared/assets/share.svg';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';

export const ShareButton = () => {
    const { addToast } = useToastStore();

    /** 현재 페이지의 링크를 복사 */
    const handleCopyLink = () => {
        const currentUrl = window.location.href; // 현재 페이지 URL 가져오기
        const textArea = document.createElement('textarea');
        textArea.value = currentUrl; // 텍스트 영역에 현재 URL 삽입
        document.body.appendChild(textArea);
        textArea.select(); // 텍스트 영역 선택
        document.execCommand('copy'); // 선택한 텍스트 복사
        document.body.removeChild(textArea); // 텍스트 영역 제거

        addToast('링크 복사 성공!', 'success');
    };

    return (
        <StyledButton onClick={handleCopyLink}>
            <StyledImg src={share} />
        </StyledButton>
    );
};
