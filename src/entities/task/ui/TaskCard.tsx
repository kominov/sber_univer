import { memo } from 'react';
import { Button } from 'shared/ui/Button';
import type { Task } from '../model/types';
import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: Task;
  onRemove: (id: string) => void;
}

// Обёртка с мемоизацией по пропсам
export const TaskCard = memo(({ task, onRemove }: TaskCardProps) => {
  return (
    <div className={`${styles.card} ${task.completed ? styles.completed : ''}`}>
      <div className={styles.content}>
        <span className={styles.status}>{task.completed ? '✓' : '○'}</span>
        <span className={styles.title}>{task.title}</span>
      </div>
      <Button
        variant="danger"
        onClick={() => onRemove(task.id)}
        aria-label={`Удалить задачу: ${task.title}`}
      >
        ×
      </Button>
    </div>
  );
});
