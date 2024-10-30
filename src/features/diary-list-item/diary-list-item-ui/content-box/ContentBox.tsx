import {
    Wrapper,
    Top,
    Title,
    Name,
    Bottom,
    Paragraph,
    Time,
    Reaction,
    Emotion
} from './ContentBoxCss';
import { getEmoticonPath } from '@/shared/model/getEmotionPath';

interface ContentBoxProps {
    title: string;
    content: string;
    emotion: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({ title, content, emotion }) => {
    return (
        <Wrapper>
            <Top>
                <Title>{title}</Title>
                <Name>김민준</Name>
            </Top>
            <Paragraph>{content}</Paragraph>
            <Bottom>
                <Time>30분전</Time>
                <Reaction />
            </Bottom>
            <Emotion imgPath={getEmoticonPath(emotion)} />
        </Wrapper>
    );
};

export default ContentBox;
