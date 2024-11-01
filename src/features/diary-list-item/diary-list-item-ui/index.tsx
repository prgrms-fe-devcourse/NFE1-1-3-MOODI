import { Wrapper } from './indexCss';
import ImageBox from './image-box/ImageBox';
import ContentBox from './content-box/ContentBox';
import { DiaryListItemType } from '../diary-list-item-type/DiaryListItemType';

interface DiaryListItemProps {
    data: DiaryListItemType;
}

const DiaryListItemUi: React.FC<DiaryListItemProps> = ({ data }) => {
    return (
        <Wrapper>
            <ImageBox imgUrl={data.music_imgurl} musicName={data.music_title} />
            <ContentBox
                title={data.title}
                time={data.updated_date}
                content={data.content}
                emotion={data.emotion}
                userName={data.author_username}
                id={data.id}
            />
        </Wrapper>
    );
};

export default DiaryListItemUi;
