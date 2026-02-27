import { TaskCardList, useTasks, type Filter } from 'features/task-list';
import { Button } from 'shared/ui/Button';
import styles from './TaskList.module.css';

export function TaskList() {
  const { tasks, filter, setFilter, removeTask } = useTasks();

  const filters: { value: Filter; label: string }[] = [
    { value: 'all', label: 'Все' },
    { value: 'completed', label: 'Завершенные' },
    { value: 'incomplete', label: 'Незавершенные' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {filters.map((f) => (
          <Button
            key={f.value}
            active={filter === f.value}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </Button>
        ))}
      </div>
      <TaskCardList tasks={tasks} onRemove={removeTask} />
    </div>
  );
}
