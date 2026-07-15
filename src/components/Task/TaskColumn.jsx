import { FiMoreHorizontal, FiPlus } from "react-icons/fi";

import SimpleTaskCard from "./SimpleTaskCard";
import ImageTaskCard from "./ImageTaskCard";
import ProgressCard from "./ProgressCard";
import ChecklistCard from "./ChecklistCard";

const TaskColumn = ({
  type,
  title,
  count,
  tasks,
  deleteTask,
  editTask,
}) => {
  return (
    <div className="flex flex-col">

      {/* Header */}
      <div className="bg-[#21943A] rounded-3xl h-20 px-7 flex items-center justify-between shadow-sm">

        <div className="flex items-center gap-3">

          <h2 className="text-white text-2xl font-semibold">
            {title}
          </h2>

          <span className="bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full">
            {count}
          </span>

        </div>

        <button className="text-white hover:scale-110 transition">
          <FiMoreHorizontal size={24} />
        </button>

      </div>

      {/* Cards */}
      <div className="flex flex-col gap-8 mt-8">

        {type === "todo" &&
          tasks.map((task) => {
            if (task.title === "New Header Image") {
              return (
                <ImageTaskCard
                  key={task.id}
                  variant="header"
                  task={task}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              );
            }

            return (
              <SimpleTaskCard
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            );
          })}

        {type === "progress" && (
          <>
            <ProgressCard />
            <ChecklistCard />
          </>
        )}

        {type === "completed" &&
          tasks.map((task) => {
            if (task.title === "Refresh Photo Slider") {
              return (
                <ImageTaskCard
                  key={task.id}
                  variant="slider"
                  task={task}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              );
            }

            if (task.title === "New Background") {
              return (
                <ImageTaskCard
                  key={task.id}
                  variant="background"
                  task={task}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              );
            }

            return (
              <SimpleTaskCard
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            );
          })}

      </div>

      {/* Add Button */}
      <div className="flex justify-center mt-8">

        <button className="w-14 h-14 rounded-full bg-[#21943A] text-white shadow-lg hover:bg-[#1B7F33] transition flex items-center justify-center">

          <FiPlus size={28} />

        </button>

      </div>

    </div>
  );
};

export default TaskColumn;