import { TooltipDemo } from 'widgets/tooltipDemo';
import { TooltipEventsDemo } from 'widgets/tooltipEventsDemo';

export const PortalShowcase = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Пример использования Tooltip через Portal</h1>
      <p>Наведите курсор на элементы ниже, чтобы увидеть подсказки.</p>

      <TooltipDemo />
      <TooltipEventsDemo />

      <div style={{ marginTop: '40px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Инструкция:</h3>
        <ul>
          <li>Наведите курсор на любой элемент с подсказкой</li>
          <li>Tooltip рендерится через <strong>ReactDOM.createPortal</strong> в узел <code>#tooltip-root</code></li>
          <li>Позиция задаётся через <strong>TooltipPosition</strong></li>
          <li><strong>Всплытие не блокируется</strong> — клик по кнопке всплывает до span, вызывая onParentClick</li>
          <li><strong>Tooltip не перехватывает события</strong> — у портала стоит <code>pointer-events: none</code></li>
          <li><strong>Изоляция стилей</strong> — тултип в #tooltip-root вне DOM-дерева родителя</li>
        </ul>
      </div>
    </div>
  );
};
