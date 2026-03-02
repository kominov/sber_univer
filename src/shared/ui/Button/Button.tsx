import styles from './Button.module.css';
import { memo } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const ButtonComponent = ({ variant = 'primary', active, disabled = false, onClick, children }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[variant]} ${active ? styles.active : ''} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const Button = memo(ButtonComponent);
