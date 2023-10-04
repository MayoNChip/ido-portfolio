import { z } from "astro/zod";
import { useState } from "react";
import { projects } from "../../lib/projects";
import { Image } from "astro:assets";

export const ProjectStatusesSchema = [
  z.literal("In Progress"),
  z.literal("Completed"),
];

type IProjectStatuses = typeof ProjectStatusesSchema;

function Projects() {
  const [activeStatus, setActiveStatus] = useState<"Completed" | "In Progress">(
    "Completed"
  );
  return (
    <div className="w-screen px-8 flex flex-col space-y-4">
      <div className="flex w-full">
        {ProjectStatusesSchema.map((status) => {
          return (
            <button
              key={status.value}
              onClick={() => {
                setActiveStatus(status.value);
              }}
              className={`p-4 w-1/2 text-accent ${
                activeStatus === status.value ? "bg-color" : "bg-secondary"
              } ${status.value === "In Progress" ? "rounded-l" : "rounded-r"}`}
            >
              {status.value}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col space-y-4">
        {projects
          .filter((project) => project.status === activeStatus)
          .map((project) => {
            return (
              <div
                key={project.id}
                className="md:w-8/12 min-w-2/3 rounded-lg bg-secondary min-h-[150px] flex p-4 justify-between shadow-color/30 shadow-lg"
              >
                <h1 className="md:text-4xl text-lg text-accent">
                  {project.title}
                </h1>
                <img
                  className="rounded md:w-[400px] h-auto w-2/3"
                  src={project.image}
                  alt={project.description}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Projects;
