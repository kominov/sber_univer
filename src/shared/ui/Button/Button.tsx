import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', active, onClick, children }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

