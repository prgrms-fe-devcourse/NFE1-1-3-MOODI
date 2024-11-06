import { Wrapper } from './indexCss';
import ImageBox from './image-box/ImageBox';
import ContentBox from './content-box/ContentBox';
import { DiaryListItemType } from '../diary-list-item-type/DiaryListItemType';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/features/login/hooks/useAuthStore';

interface DiaryListItemProps {
    data: DiaryListItemType;
}

const DiaryListItemUi: React.FC<DiaryListItemProps> = ({ data }) => {
    const { email, userName, isLoggedin, setUserInfo } = useAuthStore();
    return (
        <Link to={isLoggedin ? `/detail/${data.id}` : `/login/`}>
            <Wrapper>
                <ImageBox
                    imgUrl={data.music_imgurl}
                    musicName={data.music_title}
                />
                <ContentBox
                    title={data.title}
                    time={data.updated_date}
                    content={data.content}
                    emotion={data.emotion}
                    authorName={data.author_username}
                    id={data.id}
                    email={email}
                />
            </Wrapper>
        </Link>
    );
};

export default DiaryListItemUi;
