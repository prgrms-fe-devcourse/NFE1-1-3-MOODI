import DiaryListItem from '@/features/diary-list-item/index';
import Title from '@/shared/ui/Title/Title';
import {
    Container,
    DiaryList,
    FinalItem,
    Loading
} from './TimelineContainerCss';
import { useInfiniteFetch } from '@/pages/MainPage/hooks/useInfiniteFetch ';
import { useEffect } from 'react';
import { DiaryListItemType } from '@/features/diary-list-item/diary-list-item-type/DiaryListItemType';
import { useInView } from 'react-intersection-observer';

const TimelineContainer = () => {
    const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteFetch();

    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView && hasNextPage) {
            console.log('Fetching next page');
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);
    useEffect(() => {
        console.log(data);
    }, [data]);

    if (error) return <p>Error: {error.message}</p>;

    const fetchedData =
        data?.pages[0].totalItems !== 0
            ? data?.pages.flatMap((page) => page.diaries) || []
            : [];

    return (
        <Container>
            <Title isLoading>다른 사용자들의 일기를 확인해보세요!</Title>
            <DiaryList>
                {fetchedData &&
                    fetchedData.map((item: DiaryListItemType) => (
                        <DiaryListItem key={item.id} data={item} />
                    ))}
                <FinalItem ref={ref}>
                    {isFetchingNextPage && <Loading>...</Loading>}
                </FinalItem>
            </DiaryList>
        </Container>
    );
};

export default TimelineContainer;
