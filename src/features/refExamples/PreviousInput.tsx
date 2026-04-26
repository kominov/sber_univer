import { useState } from 'react';
import { usePrevious } from 'shared/hooks';

export function PreviousInput() {
  const [currentValue, setCurrentValue] = useState('');
  const previousValue = usePrevious(currentValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
  };

  return (
    <div>
      <h2>PreviousInput Component</h2>
      <input
        type="text"
        placeholder="Введите текст..."
        value={currentValue}
        onChange={handleInputChange}
        style={{
          padding: '8px',
          fontSize: '16px',
          width: '300px',
          marginBottom: '10px'
        }}
      />
      <div>
        <p><strong>Текущее значение:</strong> {currentValue || '(пусто)'}</p>
        <p><strong>Предыдущее значение:</strong> {previousValue || '(пусто)'}</p>
      </div>
    </div>
  );
}