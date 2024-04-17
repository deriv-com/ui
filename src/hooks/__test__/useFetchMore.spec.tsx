import { renderHook } from '@testing-library/react-hooks';
import { useFetchMore } from '../index';

describe('useFetchMore', () => {
    it('should call loadMore when scrolled to the bottom of the container', () => {
        const loadMoreMock = jest.fn();
        const containerRef = { clientHeight: 500, scrollHeight: 1000, scrollTop: 300 } ;
        const { result } = renderHook(() =>
            useFetchMore({ isFetching: false, loadMore: loadMoreMock, ref: containerRef })
        );
        const containerRefMock = { current: { clientHeight: 500, scrollHeight: 1000, scrollTop: 800 } };
        result.current.fetchMoreOnBottomReached(containerRefMock.current);

        expect(loadMoreMock).toHaveBeenCalled();
    });

    it('should not call loadMore when isFetching is true', () => {
        const loadMoreMock = jest.fn();
        const containerRef = { current: { clientHeight: 500, scrollHeight: 1000, scrollTop: 300 } };
        const { result } = renderHook(() =>
            useFetchMore({ isFetching: true, loadMore: loadMoreMock, ref: containerRef })
        );
        const containerRefMock = { current: { clientHeight: 500, scrollHeight: 1000, scrollTop: 800 } };
        result.current.fetchMoreOnBottomReached(containerRefMock.current);

        expect(loadMoreMock).not.toHaveBeenCalled();
    });

    it('should not call loadMore if scrolled to the bottom but already fetching', () => {
        const loadMoreMock = jest.fn();
        const containerRef = { current: { clientHeight: 500, scrollHeight: 1000, scrollTop: 300 } };
        const { result } = renderHook(() =>
            useFetchMore({ isFetching: true, loadMore: loadMoreMock, ref: containerRef })
        );
        const containerRefMock = { current: { clientHeight: 500, scrollHeight: 1000, scrollTop: 800 } };
        result.current.fetchMoreOnBottomReached(containerRefMock.current);

        expect(loadMoreMock).not.toHaveBeenCalled();
    });
});
