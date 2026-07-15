import ProjectCard from "./ProjectCard";

const ProjectGrid = ({
  projects = [],
  view,
  onEdit,
  onDelete,
}) => {
  if (!projects.length) {
    return (
      <div className="flex h-96 items-center justify-center rounded-3xl bg-white">

        <div className="text-center">

          <h2 className="text-2xl font-bold text-gray-700">
            No Projects Found
          </h2>

          <p className="mt-2 text-gray-400">
            Try another search or filter.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div
      className={
        view === "grid"
          ? "grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          : "space-y-6"
      }
    >
      {projects
        .filter(Boolean)
        .map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            view={view}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};

export default ProjectGrid;