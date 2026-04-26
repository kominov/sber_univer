import { TooltipDemo } from 'widgets/tooltipDemo';

export const PotralEx = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Пример использования Tooltip через Portal</h1>
      <p>Наведите курсор на элементы ниже, чтобы увидеть подсказки.</p>

      <TooltipDemo />

      <div style={{ marginTop: '40px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Инструкция:</h3>
        <ul>
          <li>Наведите курсор на любой элемент с подсказкой</li>
          <li>Tooltip рендерится через <strong>ReactDOM.createPortal</strong> в узел <code>#tooltip-root</code></li>
          <li>Позиция задаётся через enum <strong>TooltipPosition</strong></li>
        </ul>
      </div>
    </div>
  );
};
