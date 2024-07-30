import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SnackBar from '@components/snackbar';
import { ROUTES } from '@utils/constants';
import MainLayout from '@components/layout/MainLayout';
import AuthLayout from '@components/layout/AuthLayout';
import Playground from '@pages/playground';
import JoinVideoPro from '@pages/joinVideoPro';
import Dashboard from '@pages/dashboard';
import JoinVideo from '@pages/joinVideo';
import Home from '@pages/home';
import Login from '@pages/login';
import JoinVideoMediaSoup from '@pages/joinVideoMediaSoup';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.JOIN_VIDEO} element={<JoinVideo />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.JOIN_VIDEO_MEDIASOUP} element={<JoinVideoMediaSoup />} />
        <Route path={ROUTES.JOIN_VIDEO_PRO} element={<JoinVideoPro />} />
        <Route path={ROUTES.PLAYGROUND} element={<Playground />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Route>
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
