import { useEffect, useRef } from 'react';
import { AppConstant } from '../../@constants/app.constant';

// ** Custom hook for setting up an interval using an arrow function in TypeScript
const useInterval = (callback: () => void, delay = AppConstant.REFETCH_DURATION) => {
    const savedCallback = useRef<() => void>();

    // ** Remember the latest callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // ** Set up the interval
    useEffect(() => {
        const timer = setInterval(() => savedCallback.current?.(), delay);

        // ** Clean up function when component unmounted
        return () => clearInterval(timer);
    }, [delay]);
};

export default useInterval;
