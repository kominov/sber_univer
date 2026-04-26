import { TooltipEvents } from 'features/tooltipEvents';
import { useState } from 'react';
import { TooltipPosition } from 'shared/ui/Tooltip';

export function TooltipEventsDemo() {
  const [clickLog, setClickLog] = useState<string[]>([]);

  const log = (msg: string) => setClickLog((prev) => [...prev, msg]);
  return (
    <div>
      <hr style={{ margin: '40px 0' }} />

      <h2>Tooltip и всплытие событий</h2>
      <p>
        Tooltip рендерится через портал и не блокирует всплытие событий родителя.
        При клике по кнопке событие всплывает до родительского span — срабатывает лог.
        При наведении — показывается только тултип.
      </p>
      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Tooltip сверху</h3>
        <TooltipEvents text="Тултип сверху" onParentClick={() => log('Клик по родителю: сверху')}>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }} onClick={() => log('Клик по кнопке: сверху')}>
            Наведи и кликни
          </button>
        </TooltipEvents>
      </div>

      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Tooltip снизу</h3>
        <TooltipEvents text="Тултип снизу" position={TooltipPosition.Bottom} onParentClick={() => log('Клик по родителю: снизу')}>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }} onClick={() => log('Клик по кнопке: снизу')}>
            Наведи и кликни
          </button>
        </TooltipEvents>
      </div>

      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Tooltip слева</h3>
        <TooltipEvents text="Тултип слева" position={TooltipPosition.Left} onParentClick={() => log('Клик по родителю: слева')}>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }} onClick={() => log('Клик по кнопке: слева')}>
            Наведи и кликни
          </button>
        </TooltipEvents>
      </div>

      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Tooltip справа</h3>
        <TooltipEvents text="Тултип справа" position={TooltipPosition.Right} onParentClick={() => log('Клик по родителю: справа')}>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }} onClick={() => log('Клик по кнопке: справа')}>
            Наведи и кликни
          </button>
        </TooltipEvents>
      </div>

      <div style={{ marginTop: '40px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Лог событий:</h3>
        <div style={{ maxHeight: 200, overflowY: 'auto', background: '#fff', border: '1px solid #ddd', borderRadius: 4, padding: 8, fontSize: 13 }}>
          {clickLog.length === 0 && <span style={{ color: '#999' }}>Кликните по кнопкам, чтобы увидеть лог</span>}
          {clickLog.map((msg, i) => (
            <div key={i} style={{ padding: '2px 0' }}>{msg}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

