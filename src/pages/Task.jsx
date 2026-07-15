import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import TaskHeader from "../components/Task/TaskHeader";
import TaskBoard from "../components/Task/TaskBoard";
import AddTaskModal from "../components/Task/AddTaskModal";

import { defaultTasks } from "../components/Task/TaskData";

const Task = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : defaultTasks;
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(),
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  };

  const editTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    );
  };

  return (
    <Layout>

      <TaskHeader
        onAdd={() => setShowModal(true)}
      />

      <TaskBoard
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
      />

      <AddTaskModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onAddTask={addTask}
      />

    </Layout>
  );
};

export default Task;