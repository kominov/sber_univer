import { TaskCardList, useTasks, type Filter } from 'features/task-list';
import { memo, useCallback, useMemo } from 'react';
import { Button } from 'shared/ui/Button';
import styles from './TaskList.module.css';

export function TaskList() {
  const { tasks, filter, setFilter, removeTask } = useTasks();

  const filters = useMemo(
    () => [
      { value: 'all' as Filter, label: 'Все' },
      { value: 'completed' as Filter, label: 'Завершенные' },
      { value: 'incomplete' as Filter, label: 'Незавершенные' },
    ],
    []
  );

  const handleFilterClick = useCallback((value: Filter) => () => setFilter(value), [setFilter]);

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {filters.map((f) => (
          <Button
            key={f.value}
            active={filter === f.value}
            onClick={handleFilterClick(f.value)}
            disabled={false}
          >
            {f.label}
          </Button>
        ))}
      </div>
      <TaskCardList tasks={tasks} onRemove={removeTask} />
    </div>
  );
}

export const TaskListMemo = memo(TaskList);
