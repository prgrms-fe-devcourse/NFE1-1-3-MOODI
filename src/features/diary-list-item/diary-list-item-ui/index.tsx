import { Wrapper } from './indexCss';
import ImageBox from './image-box/ImageBox';
import ContentBox from './content-box/ContentBox';
import { DiaryListItemType } from '../diary-list-item-type/DiaryListItemType';
import { Link, useNavigate } from 'react-router-dom';

interface DiaryListItemProps {
    data: DiaryListItemType;
}

const DiaryListItemUi: React.FC<DiaryListItemProps> = ({ data }) => {
    return (
        <Link to={`/detail/${data.id}`}>
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
                    userName={data.author_username}
                    id={data.id}
                />
            </Wrapper>
        </Link>
    );
};

export default DiaryListItemUi;
