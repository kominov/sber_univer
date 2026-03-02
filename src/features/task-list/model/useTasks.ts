import type { Task } from 'entities/task/model/types';
import { useCallback, useMemo, useState } from 'react';
import type { Filter } from './types';

const initialTasks = [
  { id: '1', title: 'Изучить Feature-Sliced Design', completed: true },
  { id: '2', title: 'Создать структуру проекта', completed: true },
  { id: '3', title: 'Реализовать сущность Task', completed: false },
  { id: '4', title: 'Создать виджет TaskList', completed: false },
  { id: '5', title: 'Добавить фильтрацию задач', completed: false },
];

export function useTasks() {
  const [allTasks, setAllTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<Filter>('all');

  const tasks = useMemo(() => {
    if (filter === 'completed') {
      return allTasks.filter((task) => task.completed);
    }
    if (filter === 'incomplete') {
      return allTasks.filter((task) => !task.completed);
    }
    return allTasks;
  }, [allTasks, filter]);

  const removeTask = useCallback((id: string) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  return { tasks, filter, setFilter, removeTask };
}
