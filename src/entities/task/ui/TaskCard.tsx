import type { Task } from '../model/types';
import { Button } from 'shared/ui/Button';
import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: Task;
  onRemove?: (id: string) => void;
}

export function TaskCard({ task, onRemove }: TaskCardProps) {
  return (
    <div className={`${styles.card} ${task.completed ? styles.completed : ''}`}>
      <div className={styles.content}>
        <span className={styles.status}>{task.completed ? '✓' : '○'}</span>
        <span className={styles.title}>{task.title}</span>
      </div>
      {onRemove && (
        <Button variant="danger" onClick={() => onRemove(task.id)}>
          ×
        </Button>
      )}
    </div>
  );
}
