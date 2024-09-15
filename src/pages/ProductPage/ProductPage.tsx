import React from 'react';
import { Typography, } from '@mui/material';
import { useParams } from 'react-router-dom';

import { LoadingProductSkeleton } from '../../components/LoadingProductSkeleton'
import { useAPIFetchProduct } from '../../api';
import { PageContent } from './PageContent';


export const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data: productData, loaded, loading } = useAPIFetchProduct(productId || '');

  if (!productData && !loading) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  if (loading) {
    return (
		<LoadingProductSkeleton />
    );
  }

  return (
	loaded && <PageContent product={productData} />
  );
};
