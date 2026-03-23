import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { LoginPage } from './LoginPage';
import { ProfilePage } from './ProfilePage';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicPage } from './PublicPage';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
         
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          
          <Route path="*" element={
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <h2>404 - Страница не найдена</h2>
              <p>Запрошенная страница не существует.</p>
            </div>
          } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};