import { TooltipWithCoords } from 'features/tooltipWithCoords';
import { TooltipPosition } from 'shared/ui/Tooltip';

export function TooltipDemo() {
  return (
    <>
      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Tooltip сверху (по умолчанию)</h3>
        <TooltipWithCoords text="Это подсказка сверху">
          <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Наведи (сверху)</button>
        </TooltipWithCoords>
      </div>

      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Tooltip снизу</h3>
        <TooltipWithCoords text="Подсказка снизу" position={TooltipPosition.Bottom}>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Наведи (снизу)</button>
        </TooltipWithCoords>
      </div>

      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Tooltip слева</h3>
        <TooltipWithCoords text="Подсказка слева" position={TooltipPosition.Left}>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Наведи (слева)</button>
        </TooltipWithCoords>
      </div>

      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Tooltip справа</h3>
        <TooltipWithCoords text="Подсказка справа" position={TooltipPosition.Right}>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Наведи (справа)</button>
        </TooltipWithCoords>
      </div>
    </>
  );
}
