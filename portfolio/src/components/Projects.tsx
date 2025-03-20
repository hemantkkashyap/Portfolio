import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="w-full lg:min-h-[130vh] lg:h-[130vh] lg:p-10 flex flex-col items-center mt-10">
      <p className="text-[5vh] text-[#B6B6B6] w-full">Projects</p>

      <div className="w-full lg:min-h-[100vh] h-fit mt-10 flex flex-wrap flex-col lg:flex-row gap-4 lg:justify-center">
        <ProjectCard
          projectName="Project 1"
          liveLink="https://your-live-project-link.com"
          githubLink="https://github.com/your-username/project-1"
        />

        <ProjectCard
          projectName="Project 1"
          liveLink="https://your-live-project-link.com"
          githubLink="https://github.com/your-username/project-1"
        />
        <ProjectCard
          projectName="Project 1"
          liveLink="https://your-live-project-link.com"
          githubLink="https://github.com/your-username/project-1"
        />

        <ProjectCard
          projectName="Project 1"
          liveLink="https://your-live-project-link.com"
          githubLink="https://github.com/your-username/project-1"
        />
      </div>

      <button
        className=" text-white px-4 min-w-[180px] min-h-[50px] cursor-pointer rounded-full bg-[#171717] flex gap-2 w-fit justify-center items-center mt-10"
        style={{ boxShadow: "0px 0px 9px 2px rgba(34, 34, 34, 0.5)" }}
      >
        See All
      </button>
    </section>
  );
};

export default Projects;
