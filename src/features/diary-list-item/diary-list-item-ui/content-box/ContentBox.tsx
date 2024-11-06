import ReactionSelector from '@/widgets/reaction-selector/ui/ReactionSelector';
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
    time: string;
    content: string;
    emotion: string;
    authorName: string;
    id: number;
    email: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({
    title,
    time,
    content,
    emotion,
    authorName,
    id,
    email
}) => {
    // 시간차이 계산
    const targetDate = new Date(time);
    const currentDate = new Date();
    const diffInMilliseconds = currentDate.getTime() - targetDate.getTime();
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    let timeAgo = '';
    if (diffInMinutes > 60) {
        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours > 24) {
            timeAgo = `${Math.floor(diffInMinutes / (60 * 24))}일전`;
        } else {
            timeAgo = `${diffInHours}시간전`;
        }
    } else {
        timeAgo = `${diffInMinutes}분전`;
    }

    const token = localStorage.getItem('token') || '';

    return (
        <Wrapper>
            <Top>
                <Title>{title}</Title>
                <Name>{authorName}</Name>
            </Top>
            <Paragraph>{content}</Paragraph>
            <Bottom>
                <Time>{timeAgo}</Time>
                <Reaction
                    onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                    }}
                >
                    <ReactionSelector
                        diaryId={id}
                        userEmail={email}
                        isHorizontal
                        isAddBtnVisible={false}
                        token={token}
                    />
                </Reaction>
            </Bottom>
            <Emotion imgPath={getEmoticonPath(emotion)} />
        </Wrapper>
    );
};

export default ContentBox;
