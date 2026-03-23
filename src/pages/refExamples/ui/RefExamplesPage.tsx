import { ClickTimer, DebouncedLogger, FocusTracker, PreviousInput } from 'features/refExamples';

export function RefExamplesPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Примеры использования useRef</h1>
      <p>Демонстрация компонентов с использованием useRef согласно требованиям задания.</p>
      
      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <ClickTimer />
      </div>
      
      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <PreviousInput />
      </div>
      
      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <FocusTracker />
      </div>
      
      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <DebouncedLogger />
      </div>
      
      <div style={{ marginTop: '40px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Инструкция:</h3>
        <ul>
          <li><strong>ClickTimer:</strong> Нажимайте на кнопку несколько раз и проверяйте консоль браузера</li>
          <li><strong>PreviousInput:</strong> Вводите текст в поле и наблюдайте за предыдущим значением</li>
          <li><strong>FocusTracker:</strong> Переходите между полями ввода и нажимайте кнопку для фокуса</li>
          <li><strong>DebouncedLogger:</strong> Вводите текст с задержкой 1 секунда</li>
        </ul>
        <p>Откройте консоль разработчика (F12) для просмотра логов всех компонентов.</p>
      </div>
    </div>
  );
}