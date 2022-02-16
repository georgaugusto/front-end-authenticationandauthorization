import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from '../contexts/AuthContext';

import AuthRoute from './AuthRoute';
import { Layout } from '../components/Layout';

import SingIn from '../pages/SingIn';
import Dashboard from '../pages/Dashboard';
import CreateUser from '../pages/CreateUser';
import ListUser from '../pages/ListUser';
import NotFound from '../pages/NotFound';

const Router: React.FC = () => (
  <AuthProvider>
    <Routes>
      <Route path="/" element={<SingIn />} />

      <Route
        element={
          <Layout>
            <AuthRoute />
          </Layout>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listuser" element={<ListUser />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<AuthRoute roles={['administrator']} />}>
          <Route path="/createuser" element={<CreateUser />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </AuthProvider>
);

export default Router;
