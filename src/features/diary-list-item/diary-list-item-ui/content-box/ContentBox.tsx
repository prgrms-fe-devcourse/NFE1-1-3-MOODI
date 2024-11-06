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
    userName: string;
    id: number;
}

const ContentBox: React.FC<ContentBoxProps> = ({
    title,
    time,
    content,
    emotion,
    userName,
    id
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
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuyCrOyaqeyekDIiLCJlbWFpbCI6InVzZXIyQGV4YW1wbGUuY29tIiwiaWF0IjoxNzMwODI0NDI0LCJleHAiOjE3MzA4MzUyMjR9.iGY1f5Uh0bsKa_nJuVy72YeH-bYF_MK3l6VQQwAP3XE';

    return (
        <Wrapper>
            <Top>
                <Title>{title}</Title>
                <Name>{userName}</Name>
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
                        userEmail="annawa6@naver.com"
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
