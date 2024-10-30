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
            <ImageBox />
            <ContentBox
                title={data.title}
                content={data.content}
                emotion={data.emotion}
            />
        </Wrapper>
    );
};

export default DiaryListItemUi;
