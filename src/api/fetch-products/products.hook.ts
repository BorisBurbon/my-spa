import { useEffect, useState } from 'react';
import useFetch, { CachePolicies } from 'use-http';
import { API_ROUTES } from '../../constants';
import { APIResponseProductsType, ProductsResponse } from './products.types';

export const useAPIFetchProducts = (): APIResponseProductsType => {
  const [responseData, setResponseData] = useState<ProductsResponse>([] as ProductsResponse);
  const { get, response, loading, error } = useFetch(API_ROUTES.PRODUCTS, {
    cachePolicy: CachePolicies.NO_CACHE,
  });

  const fetchProducts = async (): Promise<ProductsResponse> => {
    const data = await get();
    setResponseData(data);
    return data;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    data: responseData,
    loading,
    loaded: response.ok,
    error,
  };
};
