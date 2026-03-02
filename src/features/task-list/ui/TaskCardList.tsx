import { TaskCard } from 'entities/task';
import type { Task } from 'entities/task/model/types';
import { memo } from 'react';
import styles from './TaskCardList.module.css';

interface TaskCardListProps {
  tasks: Task[];
  onRemove: (id: string) => void;
}

const TaskCardListComponent = ({ tasks, onRemove }: TaskCardListProps) => {
  if (tasks.length === 0) {
    return <p className={styles.empty}>Задач пока нет — можно начать!</p>;
  }

  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onRemove={onRemove} />
      ))}
    </div>
  );
};

export const TaskCardList = memo(TaskCardListComponent);
