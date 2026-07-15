import {
  FiCheckSquare,
  FiMessageSquare,
} from "react-icons/fi";

import {
  FaDropbox,
  FaGitlab,
  FaBitbucket,
  FaSlack,
  FaVuejs,
  FaAngular,
  FaFacebookMessenger,
} from "react-icons/fa";

import {
  SiPython,
  SiFirebase,
} from "react-icons/si";

import ProgressBar from "./ProgressBar";
import ProjectMenu from "./ProjectMenu";

const logos = {
  dropbox: <FaDropbox className="text-4xl text-blue-500" />,
  gitlab: <FaGitlab className="text-4xl text-orange-500" />,
  bitbucket: <FaBitbucket className="text-4xl text-blue-700" />,
  python: <SiPython className="text-4xl text-yellow-500" />,
  slack: <FaSlack className="text-4xl text-pink-500" />,
  firebase: <SiFirebase className="text-4xl text-yellow-400" />,
  angular: <FaAngular className="text-4xl text-red-600" />,
  vue: <FaVuejs className="text-4xl text-green-500" />,
  messenger: (
    <FaFacebookMessenger className="text-4xl text-blue-500" />
  ),
};

const ProjectCard = ({
  project,
  view,
  onEdit,
  onDelete,
}) => {
  if (!project) return null;

  return (
    <div
      className={`rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        view === "list"
          ? "flex gap-8"
          : ""
      }`}
    >
      <div className="flex-1">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50">

              {logos[project.logo] || (
                <span className="text-3xl">
                  📁
                </span>
              )}

            </div>

            <div>

              <h3 className="text-xl font-bold text-gray-800">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400">
                {project.company}
              </p>

            </div>

          </div>

          <ProjectMenu
            project={project}
            onEdit={onEdit}
            onDelete={onDelete}
          />

        </div>

        {/* Description */}

        <p className="mt-6 text-sm leading-7 text-gray-500">
          {project.description}
        </p>

        {/* Members */}

        <div className="mt-6 flex items-center justify-between">

          <div className="flex -space-x-3">

            {(project.members || []).map(
              (member, index) => (
                <img
                  key={index}
                  src={member}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />
              )
            )}

          </div>

          <span className="text-sm text-gray-500">
            {project.daysLeft}
          </span>

        </div>

        {/* Progress */}

        <div className="mt-6">

          <ProgressBar
            progress={project.progress}
          />

        </div>

        {/* Footer */}

        <div className="mt-6 flex items-center justify-between border-t pt-5">

          <div className="flex items-center gap-2 text-gray-500">

            <FiCheckSquare />

            <span>
              {project.tasks} Tasks
            </span>

          </div>

          <div className="flex items-center gap-2 text-gray-500">

            <FiMessageSquare />

            <span>
              {project.comments} Comments
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;