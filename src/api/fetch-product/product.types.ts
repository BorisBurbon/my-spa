import { ProductItem } from '../api.types';

export type APIResponseProductType<DataType = ProductItem, Loading = boolean> = {
    loading: Loading;
    loaded: boolean | undefined;
    error: Error | undefined;
    data: DataType;
};

export type ProductResponse = ProductItem;
