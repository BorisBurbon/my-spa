import { useEffect, useState } from 'react';
import useFetch, { CachePolicies } from 'use-http';
import { API_ROUTES } from '../../constants';
import { APIResponseProductType, ProductResponse } from './product.types';

export const useAPIFetchProduct = (id: string): APIResponseProductType => {
  const [responseData, setResponseData] = useState<ProductResponse>({} as ProductResponse);
  const { get, response, loading, error } = useFetch(API_ROUTES.PRODUCTS, {
    cachePolicy: CachePolicies.NO_CACHE,
  });

  const fetchProduct = async (): Promise<ProductResponse> => {
    const data = await get(`${id}`);
    setResponseData(data);
    return data;
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return {
    data: responseData,
    loading,
    loaded: response.ok,
    error,
  };
};
