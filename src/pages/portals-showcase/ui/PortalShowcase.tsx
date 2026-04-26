import { ConfirmDialogDemo } from 'widgets/confirmDialogDemo';
import { TooltipDemo } from 'widgets/tooltipDemo';
import { TooltipEventsDemo } from 'widgets/tooltipEventsDemo';

export const PortalShowcase = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Пример использования Portal</h1>
      <p>Демонстрация Tooltip и ConfirmDialog через ReactDOM.createPortal.</p>

      <TooltipDemo />
      <TooltipEventsDemo />
      <ConfirmDialogDemo />

    </div>
  );
};
