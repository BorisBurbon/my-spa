import React from 'react';
import { CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { ROUTES } from '../../router/routePaths';
import { useNavigate } from 'react-router-dom';
import { ProductItem } from '../../api/api.types';

interface PageContentProps {
  product: ProductItem;
}

const cardMediaStyles = {
  width: { xs: '100%', md: 300 },
  height: 'auto',
  paddingX: 2,
};

export const PageContent: React.FC<PageContentProps> = ({ product }) => {
  const history = useNavigate();

  return (
	<Box display="flex" flexDirection="column" alignItems="flex-start">
		<Button variant="contained" color="primary" onClick={() => history(ROUTES.HOME)}>
			<ArrowBackIcon />
			<Typography paddingX={2}>Back</Typography>
		</Button>
		<Box
			display="flex"
			flexDirection={{ xs: 'column', md: 'row' }}
			alignItems="flex-start"
			mt={2}
			sx={{ minHeight: '60vh', marginY: 3, border: '1px solid #eee', padding: 3 }}
		>
		<CardMedia
			component="img"
			sx={cardMediaStyles}
			image={product.image}
			alt={product.title}
		/>
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">
			{product?.title}
			</Typography>
			<Typography variant="body2" color="text.secondary">
			{product.description}
			</Typography>
			<Typography variant="h6" color="text.primary">
			${product.price}
			</Typography>
			<Typography variant="body2" color="text.secondary">
			Category: {product.category}
			</Typography>
			<Typography variant="body2" color="text.secondary">
			Rating: {product?.rating?.rate} ({product?.rating?.count} reviews)
			</Typography>
		</CardContent>
	  </Box>
	</Box>
  );
};
