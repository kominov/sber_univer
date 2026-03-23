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

// {"id":"cm23ds69o00mdneosogxg6k7x","email":"admin@gmail.com","name":"Максим","about":"Администратор","avatarPath":"https://i.pravatar.cc/500?img=13","phone":"+79999999999","roles":["USER"],"likes":[{"id":"5e7a81f6-5a94-4227-8d06-2972203dc062","userId":"cm23ds69o00mdneosogxg6k7x","productId":"cm0d3scwm00f9neoswx0yvu0b","product":{"id":"cm0d3scwm00f9neoswx0yvu0b","createdAt":"2024-08-28T00:13:52.343Z","updatedAt":"2024-08-28T00:13:52.343Z","name":"RURRI Игрушка плавающая для собак Краб, 30х20х4 см","slug":"rurri-igrushka-plavayuschaya-dlya-sobak-krab-30h20h4-sm","description":"Для домашних питомцев мы выбираем только самое лучшее! Rurri – это исключительный комфорт для питомца, высокое качество материалов и современный дизайн. В ассортименте бренда представлены сумки и рюкзаки для кошек и собак, товары для груминга, амуниция, миски и игрушки.\n\nПлавающая игрушка для собак Краб подойдет для собак мелких и средних пород.\n\nРазмер: 21х16х4 см.\n\n\nПреимущества:\nМожно грызть без вреда для зубов и десен собаки.\nИдеально подходит для игр во время прогулки. \nМожно использовать для тренировок. \nСпособствует тренировке жевательных мышц у собаки и массажу дёсен. \nАктивная игра позволяет собаке удовлетворять свои инстинкты, поддерживать здоровье и тонус мышц. \nВнутри есть пищалка.\nМожно играть с игрушкой в воде.","price":300,"images":"https://4lapy.ru/_next/image/?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fpim-core%2Fdbpim-prod_115942.jpg&w=1920&q=70","discount":0,"stock":10,"wight":"1 гр","tags":["toys"],"isPublished":true,"categoryId":1,"userId":"clz5hcsbg0016neosharl1eq5"}},{"id":"d927bfe5-d6b0-40a7-83d3-3dc931926a24","userId":"cm23ds69o00mdneosogxg6k7x","productId":"cm0d3o8n500f6neosrkmmxrqi","product":{"id":"cm0d3o8n500f6neosrkmmxrqi","createdAt":"2024-08-28T00:10:40.193Z","updatedAt":"2024-08-28T00:10:40.193Z","name":"RURRI Игрушка для собак Мяч Солнышко, 16х16х8,5 см","slug":"rurri-igrushka-dlya-sobak-myach-solnyshko-16h16h85-sm","description":"Для домашних питомцев мы выбираем только самое лучшее! Rurri – это исключительный комфорт для питомца, высокое качество материалов и современный дизайн. В ассортименте бренда представлены сумки и рюкзаки для кошек и собак, товары для груминга, амуниция, миски и игрушки.\n\nИгрушка для собак Мяч Солнышко от бренда Rurri поможет питомцу удовлетворять свои инстинкты и весело проводить время с пет-родителями.\n\nРазмер: 16х16х8,5 см\n\n\nПреимущества:\nДля дрессировки и активных игр.\nРазвивает интеллект, снимает напряжение и улучшает настроение питомца.\nУдаляет зубной налет в процессе игры, массирует десны.\nПодходит для игр в воде.\nВнутри есть пищалка для привлечения внимания собаки.","price":200,"images":"https://4lapy.ru/_next/image/?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fpim-core%2F332004.jpeg&w=1920&q=70","discount":0,"stock":10,"wight":"1 гр","tags":["toys"],"isPublished":true,"categoryId":1,"userId":"clz5hcsbg0016neosharl1eq5"}},{"id":"ed77db04-8cfe-4de3-8b0a-57e81376e3f8","userId":"cm23ds69o00mdneosogxg6k7x","productId":"cm1noq3ap00jyneos7409e6ml","product":{"id":"cm1noq3ap00jyneos7409e6ml","createdAt":"2024-09-29T14:37:22.609Z","updatedAt":"2024-10-02T13:41:28.468Z","name":"Nike шапка","slug":"nike-shapka","description":"Обновленное описание товара","price":1500,"images":"https://magazinqueens.ru/upload/resize_cache/iblock/c8b/653_653_2/c8b0cc82603d5988f9e687ac1f164bfc.jpg","discount":0,"stock":0,"wight":null,"tags":[],"isPublished":true,"categoryId":2,"userId":"cm1m8hq2z00j1neosjgo9d8fq"}}],"favoritesPost":[]}