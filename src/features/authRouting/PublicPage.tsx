import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './useAuth';

export const PublicPage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px' }}>
      <h1>Добро пожаловать на публичную страницу!</h1>
      
      <div style={{ marginTop: '30px' }}>
        <p>Это публичная страница, доступная всем пользователям.</p>
        
        {isAuthenticated ? (
          <div style={{ 
            backgroundColor: '#e8f5e8', 
            padding: '20px', 
            borderRadius: '8px',
            marginTop: '20px'
          }}>
            <h3>Вы вошли в систему как:</h3>
            <p><strong>Имя:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <div style={{ marginTop: '15px' }}>
              <Link 
                to="/profile" 
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  marginRight: '10px'
                }}
              >
                Перейти в профиль
              </Link>
            </div>
          </div>
        ) : (
          <div style={{ 
            backgroundColor: '#f0f0f0', 
            padding: '20px', 
            borderRadius: '8px',
            marginTop: '20px'
          }}>
            <h3>Вы не авторизованы</h3>
            <p>Для доступа к защищенным страницам необходимо войти в систему.</p>
            <div style={{ marginTop: '15px' }}>
              <Link 
                to="/login" 
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px'
                }}
              >
                Войти в систему
              </Link>
            </div>
          </div>
        )}
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>Доступные страницы:</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
              🏠 Главная (публичная)
            </Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/login" style={{ textDecoration: 'none', color: '#007bff' }}>
              🔑 Страница входа
            </Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/profile" style={{ textDecoration: 'none', color: '#007bff' }}>
              👤 Профиль (требуется авторизация)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};