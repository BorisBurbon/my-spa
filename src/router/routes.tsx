import React, { useContext } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { HomePage } from '../pages/HomePage/HomePage';
import { ProductPage } from '../pages/ProductPage';

type Props = object;

const PrivateRoutes: React.FC = () => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) return <Navigate to='/' replace />;

  return <Outlet />;
};

const AppRoutes: React.FC<Props> = () => {
  return (
    <Routes>
	  <Route path='/' element={<HomePage />} />
      <Route element={<PrivateRoutes />}>
        <Route path='/:productId' element={<ProductPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
