import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/header';

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
