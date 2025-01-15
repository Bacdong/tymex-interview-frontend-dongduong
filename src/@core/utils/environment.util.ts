type ApiType = {
    url: string;
    version?: string;
    prefix?: string;
};

export type AppEnvironment = {
    apis: {
        default: ApiType;
    };
    app: {
        name: string;
        version: string;
        url: string;
        isProd: boolean;
    };
};

const { VITE_BASE_URL, VITE_NAME, VITE_VERSION, VITE_URL, VITE_IS_PROD } = import.meta.env;

export const environment: AppEnvironment = {
    apis: {
        default: {
            url: VITE_BASE_URL || '',
        },
    },
    app: {
        name: VITE_NAME || '',
        version: VITE_VERSION || '',
        url: VITE_URL || '',
        isProd: Boolean(VITE_IS_PROD),
    },
};
