import { useEffect, useState } from 'react';

/**
 * @description Use this hook/function to avoid making too many API calls when searching by keyword.
 *
 * @param value - string - default: null
 * @param delay - ms - default: 750ms
 * @returns debouncedValue - string
 */
const useDebounce = (value: string | null, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState<string | null | undefined>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // ** Remove timeout when component unmounted
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;
