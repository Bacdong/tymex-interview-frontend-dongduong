import { useEffect } from 'react';
import { initialInterceptorsFactory } from '../interceptors';

const useHttpClient = () => {
    useEffect(() => {
        initialInterceptorsFactory();
    }, []);
};

export default useHttpClient;
