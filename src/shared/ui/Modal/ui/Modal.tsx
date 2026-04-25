import classNames from 'classnames';
import { useCallback, useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<Element | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      // Save the currently focused element (trigger) before opening
      triggerRef.current = document.activeElement;

      // Set focus to the close button
      closeButtonRef.current?.focus();

      // Add global keydown listener for Escape
      document.addEventListener('keydown', handleKeyDown);

      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';

      // Return focus to the trigger element when modal closes
      if (triggerRef.current && 'focus' in triggerRef.current) {
        (triggerRef.current as HTMLElement).focus();
      }
    };
  }, [isOpen, handleKeyDown, onClose]);

  if (!isOpen) {
    return null;
  }

  const portalContent = (
    <div className={classNames(s['overlay'])} onClick={handleOverlayClick}>
      <div className={classNames(s['modal'])} role="dialog" aria-modal="true">
        <button
          ref={closeButtonRef}
          className={classNames(s['closeButton'])}
          onClick={onClose}
          aria-label="Закрыть модальное окно"
          type="button"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    return null;
  }

  return createPortal(portalContent, modalRoot);
};
