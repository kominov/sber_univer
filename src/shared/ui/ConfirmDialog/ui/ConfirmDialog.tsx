import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './ConfirmDialog.module.css';

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  children?: ReactNode;
}

export function ConfirmDialog({ open, title, description, onConfirm, onCancel, children }: ConfirmDialogProps) {
  const root = document.getElementById('dialog-root');

  if (!open || !root) return <>{children}</>;

  return (
    <>
      {children}
      {createPortal(
        <div className={styles.overlay} onClick={onCancel}>
          <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <div className={styles.buttonRow}>
              <button className={styles.cancelButton} onClick={onCancel}>
                Отмена
              </button>
              <button className={styles.confirmButton} onClick={onConfirm}>
                Подтвердить
              </button>
            </div>
          </div>
        </div>,
        root,
      )}
    </>
  );
}

