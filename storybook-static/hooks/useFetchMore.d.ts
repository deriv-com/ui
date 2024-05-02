type TProps = {
    isFetching: boolean;
    loadMore: () => void;
    ref: React.RefObject<HTMLDivElement>;
};
/** A custom hook to load more items in the table on scroll to bottom of the table */
export declare const useFetchMore: ({ isFetching, loadMore, ref }: TProps) => {
    fetchMoreOnBottomReached: (containerRefElement?: HTMLDivElement | null) => void;
};
export {};
