import DiaryListItemUi from './diary-list-item-ui/index';
import { DiaryListItemType } from './diary-list-item-type/DiaryListItemType';

interface DiaryListItemProps {
    data: DiaryListItemType;
}

const DiaryListItem: React.FC<DiaryListItemProps> = ({ data }) => {
    return <DiaryListItemUi data={data} />;
};

export default DiaryListItem;
