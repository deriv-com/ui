import { renderHook } from '@testing-library/react-hooks';
import {useDevice} from '../useDevice';

const mockWindowSize = jest.fn();
jest.mock('usehooks-ts', () => ({
    useMediaQuery: () => mockWindowSize(),
}));

describe('useDevice', () => {
    it('should correctly identify a desktop device', () => {
        mockWindowSize.mockReturnValue({ width: 1024 });
        const { result } = renderHook(() => useDevice());
        expect(result.current.isDesktop).toBe(true);
        expect(result.current.isMobile).toBe(false);
        expect(result.current.isTablet).toBe(false);
    });

    it('should correctly identify a mobile device', () => {
        mockWindowSize.mockReturnValue({ width: 767 });
        const { result } = renderHook(() => useDevice());
        expect(result.current.isMobile).toBe(true);
        expect(result.current.isDesktop).toBe(false);
        expect(result.current.isTablet).toBe(false);
    });

    it('should correctly identify a tablet device', () => {
        mockWindowSize.mockReturnValue({ width: 768 });
        const { result } = renderHook(() => useDevice());
        expect(result.current.isTablet).toBe(true);
        expect(result.current.isDesktop).toBe(false);
        expect(result.current.isMobile).toBe(false);
    });
});
