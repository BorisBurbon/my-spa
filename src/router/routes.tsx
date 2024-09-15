import React, { useContext } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { HomePage } from '../pages/HomePage/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { ROUTES } from './routePaths';

type Props = object;

const PrivateRoutes: React.FC = () => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) return <Navigate to={ROUTES.HOME} replace />;

  return <Outlet />;
};

const AppRoutes: React.FC<Props> = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route element={<PrivateRoutes />}>
        <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;