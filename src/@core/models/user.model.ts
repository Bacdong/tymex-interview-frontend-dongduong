import { OnlineStatusType } from '../enums';
import { GenderType } from '../enums/gender.enum';

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: GenderType | string;
    avatar: string;
    onlineStatus: OnlineStatusType | string;
}
