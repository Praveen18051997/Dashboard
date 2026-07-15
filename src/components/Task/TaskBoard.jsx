import TaskColumn from "./TaskColumn";

const TaskBoard = ({ tasks, deleteTask, editTask }) => {
  const todoTasks = tasks.filter(
    (task) => task.status === "todo"
  );

  const progressTasks = tasks.filter(
    (task) => task.status === "progress"
  );

  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  );

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

      <TaskColumn
        type="todo"
        title="TODO"
        count={todoTasks.length}
        tasks={todoTasks}
        deleteTask={deleteTask}
        editTask={editTask}
      />

      <TaskColumn
        type="progress"
        title="IN PROGRESS"
        count={progressTasks.length}
        tasks={progressTasks}
        deleteTask={deleteTask}
        editTask={editTask}
      />

      <TaskColumn
        type="completed"
        title="COMPLETED"
        count={completedTasks.length}
        tasks={completedTasks}
        deleteTask={deleteTask}
        editTask={editTask}
      />

    </div>
  );
};

export default TaskBoard;