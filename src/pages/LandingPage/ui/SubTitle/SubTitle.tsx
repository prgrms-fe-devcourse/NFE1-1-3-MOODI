import React from 'react';
import { Title } from './SubTitle.styled';

interface SubTitleProps {
    subTitle: string;
}

const SubTitle = ({ subTitle }: SubTitleProps) => {
    return <Title>{subTitle}</Title>;
};

export default SubTitle;
