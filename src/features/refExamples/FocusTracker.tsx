import { useRef } from 'react';

export function FocusTracker() {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const focusTransitionCountRef = useRef<number>(0);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget) {
      focusTransitionCountRef.current += 1;
      console.log(`Переход фокуса между полями!`);
      console.log(`Общее количество переходов: ${focusTransitionCountRef.current}`);
    }
  };

  const handleFocusFirstInput = () => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
      console.log('Фокус установлен на первое поле');
    }
  };

  return (
    <div>
      <h2>FocusTracker Component</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <input
          ref={firstInputRef}
          type="text"
          placeholder="Первое поле"
          onFocus={handleFocus}
          style={{
            padding: '8px',
            fontSize: '16px',
            width: '300px',
            marginRight: '10px'
          }}
        />
        <input
          ref={secondInputRef}
          type="text"
          placeholder="Второе поле"
          onFocus={handleFocus}
          style={{
            padding: '8px',
            fontSize: '16px',
            width: '300px'
          }}
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <button
          onClick={handleFocusFirstInput}
          style={{
            padding: '8px 16px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Сфокусировать на первом
        </button>
      </div>
      
      <div>
        <p><strong>Инструкция:</strong></p>
        <ul>
          <li>Нажмите кнопку "Сфокусировать на первом" для установки фокуса на первое поле</li>
          <li>Переходите между полями с помощью Tab или кликая мышкой</li>
          <li>Каждый переход между полями будет засчитан и отображен в консоли</li>
        </ul>
        <p>Откройте консоль разработчика (F12) для просмотра количества переходов.</p>
      </div>
    </div>
  );
}