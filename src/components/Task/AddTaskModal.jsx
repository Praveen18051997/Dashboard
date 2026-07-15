import { useState } from "react";
import { FiX } from "react-icons/fi";

const AddTaskModal = ({ open, onClose, onAddTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "todo",
    dueDate: "",
    priority: "Medium",
  });

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title.trim()) return;

    onAddTask(task);

    setTask({
      title: "",
      description: "",
      status: "todo",
      dueDate: "",
      priority: "Medium",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-3xl w-[500px] p-8 shadow-xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <h2 className="text-2xl font-semibold">
            Add New Task
          </h2>

          <button onClick={onClose}>
            <FiX size={24} />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Task Title"
            value={task.title}
            onChange={(e) =>
              setTask({
                ...task,
                title: e.target.value,
              })
            }
            className="w-full h-12 border rounded-xl px-4 outline-none focus:border-[#21943A]"
          />

          <textarea
            rows={4}
            placeholder="Description"
            value={task.description}
            onChange={(e) =>
              setTask({
                ...task,
                description: e.target.value,
              })
            }
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#21943A]"
          />

          <select
            value={task.status}
            onChange={(e) =>
              setTask({
                ...task,
                status: e.target.value,
              })
            }
            className="w-full h-12 border rounded-xl px-4"
          >
            <option value="todo">Todo</option>
            <option value="progress">
              In Progress
            </option>
            <option value="completed">
              Completed
            </option>
          </select>

          <input
            type="date"
            value={task.dueDate}
            onChange={(e) =>
              setTask({
                ...task,
                dueDate: e.target.value,
              })
            }
            className="w-full h-12 border rounded-xl px-4"
          />

          <select
            value={task.priority}
            onChange={(e) =>
              setTask({
                ...task,
                priority: e.target.value,
              })
            }
            className="w-full h-12 border rounded-xl px-4"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-[#21943A] text-white font-semibold hover:bg-[#1B7F33] transition"
          >
            Add Task
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddTaskModal;