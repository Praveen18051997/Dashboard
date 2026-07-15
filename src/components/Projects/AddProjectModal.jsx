import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const avatar = [
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=13",
  "https://i.pravatar.cc/150?img=14",
];

const AddProjectModal = ({
  open,
  onClose,
  onAdd,
  project,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    description: "",
    status: "Started",
    progress: 0,
  });

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        company: project.company,
        description: project.description,
        status: project.status,
        progress: project.progress,
      });
    } else {
      setFormData({
        title: "",
        company: "",
        description: "",
        status: "Started",
        progress: 0,
      });
    }
  }, [project, open]);

  if (!open) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "progress"
          ? Number(e.target.value)
          : e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.title.trim() ||
      !formData.company.trim() ||
      !formData.description.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    const projectData = {
      ...(project || {}),
      title: formData.title,
      company: formData.company,
      description: formData.description,
      status: formData.status,
      progress: formData.progress,

      logo: project?.logo || "dropbox",

      members: project?.members || avatar,

      tasks: project?.tasks || 0,

      comments: project?.comments || 0,

      daysLeft:
        project?.daysLeft || "1 week left",
    };

    onAdd(projectData);

    onClose();

    setFormData({
      title: "",
      company: "",
      description: "",
      status: "Started",
      progress: 0,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold">

            {project
              ? "Edit Project"
              : "Add Project"}

          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <FiX size={22} />
          </button>

        </div>

        {/* Form */}

        <div className="grid grid-cols-2 gap-5">

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            className="rounded-xl border border-gray-300 p-3 outline-none focus:border-[#21943A]"
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="rounded-xl border border-gray-300 p-3 outline-none focus:border-[#21943A]"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="rounded-xl border border-gray-300 p-3 outline-none focus:border-[#21943A]"
          >
            <option>Started</option>
            <option>On Hold</option>
            <option>Completed</option>
          </select>

          <input
            type="number"
            min="0"
            max="100"
            name="progress"
            value={formData.progress}
            onChange={handleChange}
            className="rounded-xl border border-gray-300 p-3 outline-none focus:border-[#21943A]"
          />

          <textarea
            rows={5}
            name="description"
            placeholder="Project Description"
            value={formData.description}
            onChange={handleChange}
            className="col-span-2 rounded-xl border border-gray-300 p-3 outline-none focus:border-[#21943A]"
          />

        </div>

        {/* Footer */}

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-6 py-3 transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-[#21943A] px-6 py-3 font-semibold text-white transition hover:bg-[#1b7d32]"
          >
            {project
              ? "Update Project"
              : "Save Project"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddProjectModal;