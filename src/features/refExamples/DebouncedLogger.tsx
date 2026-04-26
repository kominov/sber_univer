import { useRef, useState } from 'react';

export function DebouncedLogger() {
  const [inputValue, setInputValue] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    
    timeoutRef.current = setTimeout(() => {
      console.log(`Debounced log: "${value}"`);
    }, 1000); 
  };

  return (
    <div>
      <h2>DebouncedLogger Component</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Введите текст с задержкой 1 секунда..."
          value={inputValue}
          onChange={handleInputChange}
          style={{
            padding: '8px',
            fontSize: '16px',
            width: '400px'
          }}
        />
      </div>
      
      <div>
        <p><strong>Текущий ввод:</strong> {inputValue || '(пусто)'}</p>
        <p><strong>Инструкция:</strong></p>
        <ul>
          <li>Вводите текст в поле - логи будут появляться с задержкой 1 секунда</li>
          <li>Если вы продолжаете вводить, предыдущий таймаут сбрасывается</li>
          <li>Логи выводятся только после паузы в вводе (1 секунда без изменений)</li>
        </ul>
        <p>Откройте консоль разработчика (F12) для просмотра логов.</p>
      </div>
    </div>
  );
}