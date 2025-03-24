import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="w-full lg:min-h-[130vh] lg:h-[130vh] lg:p-10 flex flex-col items-center mt-10">
      <p className="text-[5vh] text-[#B6B6B6] w-full">Projects</p>

      <div className="w-full lg:min-h-[100vh] h-fit mt-10 flex flex-wrap flex-col lg:flex-row gap-4 lg:justify-center">
        <ProjectCard
          projectName="AI-Powered Automation Chatbot"
          liveLink="https://aiagent-peach.vercel.app/"
          githubLink="https://github.com/hemantkkashyap/8thSem"
          image={"https://www.streebo.com/wp-content/themes/streebo/images/creditcard23/img1.png"}
          description={"Developed a chatbot that generates email drafts, executes email delivery, manages GitHub repositories, and updates LinkedIn profiles based on user inputs"}
        />

        <ProjectCard
          projectName="Learnvibe"
          liveLink="https://learnvibe.vercel.app"
          image={"https://png.pngtree.com/png-clipart/20220502/original/pngtree-e-learning-word-concepts-banner-png-image_7651797.png"}
          githubLink="https://github.com/hemantkkashyap/learning-website"
          description={"Created an E-Learning Platform, for beginner to Learn Programming easily."}
        />
        <ProjectCard
          projectName="Gatherease"
          image={"https://d2r3fkmprkayl1.cloudfront.net/Eventtitans-new-img/EventTitans-inner/inner-page-img17.png"}
          liveLink="https://your-live-project-link.com"
          githubLink="https://github.com/your-username/project-1"
          description={" Developed a responsive event management website with an intuitive user interface."}
        />

        <ProjectCard
          projectName="File Zipper"
          image={"https://tiiny.host/assets/images/publish.png"}
          liveLink="https://file-zipper-three.vercel.app/"
          githubLink="https://github.com/hemantkkashyap/FileZipper"
          description={"Developed and File Zipper Website where user can compress there files"}
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
