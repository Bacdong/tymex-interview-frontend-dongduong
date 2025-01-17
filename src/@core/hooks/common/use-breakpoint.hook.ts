import { Breakpoint, Grid } from 'antd';

const { useBreakpoint: useAntdBreakpoint } = Grid;

const useBreakpoint = (): Partial<Record<Breakpoint, boolean>> => {
    // ** Hooks
    const screens = useAntdBreakpoint();

    return screens;
};

export default useBreakpoint;
