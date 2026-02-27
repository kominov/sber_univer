import { TaskList } from 'widgets/taskList';
import styles from './TaskPage.module.css';

export function TaskPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Мои задачи</h1>
      <TaskList />
    </div>
  );
}
