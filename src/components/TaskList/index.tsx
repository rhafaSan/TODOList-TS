import { ITask } from "../../interfaces/Task";

import styles from "./taskList.module.css";

interface TaskListProps {
  taskList: ITask[];
  handleDelete: (id: number) => void;
  handleEdit: (task: ITask) => void;
}

export const TaskList = ({
  taskList,
  handleDelete,
  handleEdit,
}: TaskListProps) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList
          .sort((a, b) => b.difficulty - a.difficulty)
          .map((task) => (
            <div key={task.id} className={styles.task}>
              <div className={styles.details}>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div className={styles.actions}>
                <i
                  className="bi bi-pencil"
                  onClick={() => handleEdit(task)}
                ></i>
                <i
                  className="bi bi-trash"
                  onClick={() => handleDelete(task.id)}
                ></i>
              </div>
            </div>
          ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};
