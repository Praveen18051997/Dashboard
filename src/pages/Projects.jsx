import { useEffect, useMemo, useState } from "react";

import Layout from "../components/Layout";

import ProjectToolbar from "../components/Projects/ProjectToolbar";
import ProjectTabs from "../components/Projects/ProjectTabs";
import ProjectGrid from "../components/Projects/ProjectGrid";
import AddProjectModal from "../components/Projects/AddProjectModal";

import { defaultProjects } from "../components/Projects/ProjectData";

const Projects = () => {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem("projects");

      if (!saved) return defaultProjects;

      const parsed = JSON.parse(saved);

      return Array.isArray(parsed)
        ? parsed
        : defaultProjects;
    } catch {
      return defaultProjects;
    }
  });

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("All");

  const [view, setView] = useState("grid");

  const [showModal, setShowModal] =
    useState(false);

  // NEW

  const [editingProject, setEditingProject] =
    useState(null);

  useEffect(() => {
    localStorage.setItem(
      "projects",
      JSON.stringify(projects)
    );
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (!project) return false;

      const searchMatch =
        project.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        project.company
          .toLowerCase()
          .includes(search.toLowerCase());

      const statusMatch =
        status === "All"
          ? true
          : project.status === status;

      return searchMatch && statusMatch;
    });
  }, [projects, search, status]);

  // ADD

  const addProject = (project) => {
    setProjects((prev) => [
      {
        id: Date.now(),
        ...project,
      },
      ...prev,
    ]);
  };

  // EDIT

  const editProject = (project) => {
    setEditingProject(project);

    setShowModal(true);
  };

  // SAVE EDIT

  const updateProject = (updatedProject) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === updatedProject.id
          ? updatedProject
          : project
      )
    );

    setEditingProject(null);
  };

  // DELETE

  const deleteProject = (id) => {
    if (
      window.confirm(
        "Delete this project?"
      )
    ) {
      setProjects((prev) =>
        prev.filter(
          (project) => project.id !== id
        )
      );
    }
  };

  return (
    <Layout>

      <div className="space-y-6">

        <ProjectToolbar
          search={search}
          setSearch={setSearch}
          view={view}
          setView={setView}
          onAdd={() => {
            setEditingProject(null);
            setShowModal(true);
          }}
        />

        <ProjectTabs
          status={status}
          setStatus={setStatus}
          projects={projects}
        />

        <ProjectGrid
          projects={filteredProjects}
          view={view}
          onDelete={deleteProject}
          onEdit={editProject}
        />

      </div>

      <AddProjectModal
        open={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingProject(null);
        }}
        onAdd={
          editingProject
            ? updateProject
            : addProject
        }
        project={editingProject}
      />

    </Layout>
  );
};

export default Projects;