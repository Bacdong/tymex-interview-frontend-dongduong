import { StorageKeyConstant } from "../../@constants/storage-key.constant";

export class JwtService {
    private static readonly storage = typeof window !== 'undefined' ? window.localStorage : null;

    public static get jwtToken(): string | null {
        return this.storage?.getItem(StorageKeyConstant.JWT_TOKEN) || null;
    }

    public static readonly setToken = (token: string): void => {
        this.storage?.setItem(StorageKeyConstant.JWT_TOKEN, token);
    };

    public static get refreshToken(): string | null {
        return this.storage?.getItem(StorageKeyConstant.REFRESH_TOKEN) || null;
    }

    public static readonly setRefreshToken = (token: string): void => {
        this.storage?.setItem(StorageKeyConstant.REFRESH_TOKEN, token);
    };
}
