import { createRoot, type Root } from 'react-dom/client';
import { ConfirmDialog } from './ConfirmDialog';

interface ConfirmDialogOptions {
  title: string;
  description: string;
}

export function showConfirmDialog({ title, description }: ConfirmDialogOptions): Promise<boolean> {
  return new Promise((resolve) => {
    const container = document.createElement('div');
    const rootEl = document.getElementById('dialog-root');
    if (!rootEl) {
      resolve(false);
      return;
    }
    rootEl.appendChild(container);

    let root: Root | null = null;

    const cleanup = () => {
      if (root) {
        root.unmount();
        root = null;
      }
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };

    const handleConfirm = () => {
      cleanup();
      resolve(true);
    };

    const handleCancel = () => {
      cleanup();
      resolve(false);
    };

    root = createRoot(container);
    root.render(
      <ConfirmDialog
        open
        title={title}
        description={description}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />,
    );
  });
}
