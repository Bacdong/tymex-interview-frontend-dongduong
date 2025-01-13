type ApiType = {
    url: string;
    version?: string;
    prefix?: string;
};

export type AppEnvironment = {
    apis: {
        default: ApiType,
    },
    app: {
        name: string;
        version: string;
        url: string;
        isProd: boolean;
    }
}

const {
    REACT_APP_BASE_URL,
    REACT_APP_NAME,
    REACT_APP_VERSION,
    REACT_APP_URL,
    REACT_APP_IS_PROD,
} = import.meta.env;

export const environment: AppEnvironment = {
    apis: {
        default: {
            url: REACT_APP_BASE_URL || '',
        }
    },
    app: {
        name: REACT_APP_NAME || '',
        version: REACT_APP_VERSION || '',
        url: REACT_APP_URL || '',
        isProd: Boolean(REACT_APP_IS_PROD),
    }
};
