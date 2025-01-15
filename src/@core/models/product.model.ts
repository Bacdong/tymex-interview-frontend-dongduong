import { ProductThemeType } from '../enums';
import { IProductImage } from './media.model';
import { IUser } from './user.model';

export interface ICategory {
    name: string;
}

export interface IProduct {
    id: number;
    title: string;
    category: ICategory['name'];
    price: number;
    isFavorite: boolean;
    theme: ProductThemeType | string;
    imageId: IProductImage['id'];
    authorId: IUser['id'];
}
