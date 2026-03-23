import { useAuth } from './useAuth';

export const ProfilePage= () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  if (!user) {
    return <div>Пользователь не найден</div>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>Профиль пользователя</h2>
        <button
          onClick={handleLogout}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Выйти
        </button>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ marginBottom: '15px' }}>
          <strong>Email:</strong> {user.email}
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Имя:</strong> {user.name}
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>О себе:</strong> {user.about || 'Не указано'}
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Телефон:</strong> {user.phone}
        </div>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <p>Это защищенная страница профиля. Доступ к ней возможен только после авторизации.</p>
      </div>
    </div>
  );
};

