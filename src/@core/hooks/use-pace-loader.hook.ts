import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePaceLoader = () => {
    // ** Hooks
    const location = useLocation();

    useEffect(() => {
        nProgress.start();

        const timer = setTimeout(() => nProgress.done(), 500);

        return () => {
            clearTimeout(timer);
            nProgress.done();
        };
    }, [location.pathname]);

    return null;
};

export default usePaceLoader;
