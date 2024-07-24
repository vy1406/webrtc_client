import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JoinVideo from './pages/JoinVideo';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import JoinVideoPro from './pages/JoinVideoPro';
import SnackBar from '@components/snackbar';
import { ROUTES } from '@utils/constants';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.JOIN_VIDEO} element={<JoinVideo />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.JOIN_VIDEO_PRO} element={<JoinVideoPro />} />
    </Routes>
  );
}

const App: React.FC = () => {
  return (
    <>
      <AppRoutes />
      <SnackBar />
    </>
  );
};

export default App;
