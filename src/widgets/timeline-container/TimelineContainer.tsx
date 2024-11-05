import DiaryListItem from '@/features/diary-list-item/index';
import Title from '@/shared/ui/Title/Title';
import {
    Container,
    DiaryList,
    FinalItem,
    Loading
} from './TimelineContainerCss';
import { useInfiniteFetch } from '@/shared/hooks/useInfiniteFetch';
import { useEffect } from 'react';
import { DiaryListItemType } from '@/features/diary-list-item/diary-list-item-type/DiaryListItemType';
import { useInView } from 'react-intersection-observer';
import { useQueryClient } from '@tanstack/react-query';

interface TimelineContainerProps {
    titleTarget: string;
    sort: string;
    email: string;
}

const TimelineContainer: React.FC<TimelineContainerProps> = ({
    titleTarget,
    sort,
    email
}) => {
    const queryClient = useQueryClient();
    const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteFetch(sort, email);

    const { ref, inView } = useInView();

    // sort가 변경될 때 쿼리 캐시를 명시적으로 초기화
    useEffect(() => {
        queryClient.resetQueries({ queryKey: ['timeline', sort, email] });
    }, [sort, email, queryClient]);

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

    if (error) return <p>Error: {error.message}</p>;

    const fetchedData =
        data?.pages.reduce((acc, page) => {
            if (!page || page.totalItems === 0) return acc;
            return [...acc, ...page.diaries];
        }, [] as DiaryListItemType[]) || [];

    return (
        <Container>
            <Title isLoading>{titleTarget}의 일기를 확인해보세요!</Title>
            <DiaryList>
                {fetchedData.map((item: DiaryListItemType) => (
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
