import { ReactNode } from 'react';

export type SafeAny = any;

export type EnumValues<T> = T[keyof T];

export type HookReturnType<T = SafeAny, V = SafeAny> = {
    isLoading: boolean;
    data: T;
    mutation: (payload: V) => Promise<void>;
};

export type LayoutProps = {
    children: ReactNode;
};
