import React from 'react';
import { StyledButton, StyledImg } from './ShareButton.styled';
import share from '@/shared/assets/share.svg';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';

export const ShareButton = () => {
    const { addToast } = useToastStore();

    /** 현재 페이지의 링크를 복사 */
    const handleCopyLink = () => {
        const currentUrl = window.location.href; // 현재 페이지 URL 가져오기
        navigator.clipboard
            .writeText(currentUrl)
            .then(() => {
                addToast('링크 복사 성공!', 'success');
            })
            .catch((error) => {
                addToast('링크 복사 실패!', 'warning');
            });
    };

    return (
        <StyledButton onClick={handleCopyLink}>
            <StyledImg src={share} />
        </StyledButton>
    );
};
