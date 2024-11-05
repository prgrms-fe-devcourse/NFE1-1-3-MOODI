import React from 'react';
import { StyledButton, StyledImg } from './ShareButton.styled';
import share from '@/shared/assets/share.svg';

export const ShareButton = () => {
    /** 현재 페이지의 링크를 복사 */
    const handleCopyLink = () => {
        const currentUrl = window.location.href; // 현재 페이지 URL 가져오기
        navigator.clipboard
            .writeText(currentUrl)
            .then(() => {
                console.log('복사 완료 :', currentUrl);
            })
            .catch((error) => {
                console.error('복사 실패 :', error);
            });
    };

    return (
        <StyledButton onClick={handleCopyLink}>
            <StyledImg src={share} />
        </StyledButton>
    );
};
