import { TaskCard } from 'entities/task';
import type { Task } from 'entities/task/model/types';
import styles from './TaskCardList.module.css';

interface TaskCardListProps {
  tasks: Task[];
  onRemove?: (id: string) => void;
}

export function TaskCardList({ tasks, onRemove }: TaskCardListProps) {
  if (tasks.length === 0) {
    return <p className={styles.empty}>Нет задач</p>;
  }

  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onRemove={onRemove} />
      ))}
    </div>
  );
}
