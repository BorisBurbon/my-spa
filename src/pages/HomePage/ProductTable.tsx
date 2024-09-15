import React, { useContext } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Pagination,
} from '@mui/material';

import { AuthContext } from '../../context/AuthContext';
import { ProductItem } from '../../api/api.types';

interface ProductTableProps {
	paginatedData: ProductItem[];
	filteredDataLength: number;
	itemsPerPage: number;
	currentPage: number;
	handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
	handleTitleClick: (id: number) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({
	paginatedData,
	filteredDataLength,
	itemsPerPage,
	currentPage,
	handlePageChange,
	handleTitleClick,
}) => {

	const { authenticated  } = useContext(AuthContext);

	const createImagePreview = (
		item: ProductItem,
		e: React.MouseEvent<HTMLImageElement, MouseEvent>
	) => {
		const img = document.createElement('img');
		img.src = item.image;
		img.style.position = 'absolute';
		img.style.width = 'auth';
		img.style.height = '120px';
		img.style.top = `${e.clientY * 1.05}px`;
		img.style.left = `${e.clientX / 1.1}px`;
		img.style.zIndex = '1000';
		img.id = `preview-${item.id}`;
		document.body.appendChild(img);
	};

	return (
	<Box sx={{ minHeight: '600px' }}>
		<TableContainer component={Paper}>
		<Table>
			<TableHead>
			<TableRow>
				<TableCell>Id</TableCell>
				<TableCell>Name</TableCell>
				<TableCell>Price</TableCell>
				<TableCell>Image</TableCell>
			</TableRow>
			</TableHead>
			<TableBody>
			{paginatedData.map((item) => (
				<TableRow key={item.id}>
				<TableCell>{item.id}</TableCell>
				<TableCell>
                    <Typography
                        variant="body1"
                        color={authenticated ? "primary" : "textPrimary"}
                        onClick={authenticated ? () => handleTitleClick(item.id) : undefined}
                        style={{ cursor: authenticated ? 'pointer' : 'default' }}
                    >
                        {item.title}
                    </Typography>
				</TableCell>
				<TableCell>{item.price}</TableCell>
				<TableCell>
					<img
						src={item.image}
						alt={item.title}
						style={{ height: '40px', cursor: 'pointer' }}
						onMouseEnter={(e) => createImagePreview(item, e)}
						onMouseLeave={() => {
							const img = document.getElementById(`preview-${item.id}`);
							if (img) {
							document.body.removeChild(img);
							}
						}}
					/>
				</TableCell>
				</TableRow>
			))}
			</TableBody>
		</Table>
		</TableContainer>
		<Pagination
			count={Math.ceil(filteredDataLength / itemsPerPage)}
			page={currentPage}
			onChange={handlePageChange}
			sx={{ marginTop: 2 }}
		/>
	</Box>
	);
};

export default ProductTable;
