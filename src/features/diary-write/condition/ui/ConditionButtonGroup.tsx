import React from 'react';
import { Container } from './ConditionButtonGroup.styled';
import { ConditionButtonGroupProps, CONDITIONS } from '../model/type';
import { ConditionButton } from '../../../../entities/condition';

// condition으로 네이밍 변경 해야합니다
export const ConditionButtonGroup = ({
    selectedCondition, // 현재 선택되어있는 기분 상태
    onConditionChange // 부모 컴포넌트로 선택된 기분 전달
}: ConditionButtonGroupProps) => {
    return (
        <Container>
            {CONDITIONS.map((condition) => {
                return (
                    <ConditionButton
                        key={condition}
                        isActive={selectedCondition === condition}
                        onClick={() => onConditionChange(condition)}
                    >
                        {condition}
                    </ConditionButton>
                );
            })}
        </Container>
    );
};
