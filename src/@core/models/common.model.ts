import { SortbyType } from '../enums/common.enum';
import { ProductThemeType, ProductTierType } from '../enums/product.enum';
import { IProduct } from './product.model';

export interface IQueryParams {
    keyword?: string;
    min_price?: number;
    max_price?: number;
    tier?: ProductTierType | string;
    theme?: ProductThemeType | string;
    sort_by?: SortbyType | string;
    category_name?: IProduct['category'] | string;
}
