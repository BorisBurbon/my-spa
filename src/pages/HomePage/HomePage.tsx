import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { LoadingTableSkeleton } from '../../components/LoadingTableSkeleton';
import { ProductItem } from '../../api/api.types';
import { useAPIFetchProducts } from '../../api';
import { Search } from './Search';
import ProductTable from './ProductTable';

export const HomePage: React.FC = () => {
  const { data: products, loaded, loading } = useAPIFetchProducts();
  const [filteredData, setFilteredData] = useState<ProductItem[]>(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredData(
      products.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [products, searchTerm]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleTitleClick = (id: number) => {
    navigate(`/${id}`);
  };

  const paginatedData = filteredData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" component="div" gutterBottom>
        Home Page
      </Typography>
      <Search setSearchTerm={setSearchTerm} products={products} />
      {loading && <LoadingTableSkeleton />}
      {loaded && (
        <ProductTable
          paginatedData={paginatedData}
          filteredDataLength={filteredData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          handleTitleClick={handleTitleClick}
        />
      )}
    </Box>
  );
};
