import { ProductItem } from '../api.types';

export type APIResponseProductsType<DataType = ProductItem[], Loading = boolean> = {
    loading: Loading;
    loaded: boolean | undefined;
    error: Error | undefined;
    data: DataType;
};

export type ProductsResponse = ProductItem[]
