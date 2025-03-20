'use client'
import React, { useRef } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


const Page = () => {

  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Function to handle scroll to section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement  | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full lg:h-screen bg-[#070707] lg:flex justify-center items-center relative text-[#B6B6B6]">

      <div  className="absolute top-6 left-0 text-white px-4 min-w-[150px] h-[50px] justify-center items-center rounded-full flex">
      <Tooltip title="Instagram" arrow>
          <IconButton>
            <img src="./image 22 (1).svg" alt="About" className="h-[70px] mt-2" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Linkedin" arrow>
          <IconButton>
            <img src="./image 23.svg" alt="Education" className="h-[40px]" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Github" arrow>
          <IconButton>
            <img src="./image 21 (1).svg" alt="Experience" className="h-[50px]"/>
          </IconButton>
        </Tooltip>


        <Tooltip title="Resume" arrow>
          <IconButton onClick={() => window.open('/resume.pdf', '_blank')}>
            <img src="https://static.vecteezy.com/system/resources/previews/030/774/936/original/3d-cv-resume-icon-png.png" alt="Experience" className="h-[40px]"/>
          </IconButton>
        </Tooltip>
        
      </div>
      <div className="lg:w-[50%] h-full lg:p-20 p-10 flex flex-col items-center lg:items-start pt-28">
        <h1 className=" text-[#B6B6B6] lg:text-[8vh] text-[4vh] lg:max-w-[500px] lg:leading-[9vh] mt-4">
          Hii, I am Hemant Kashyap , Software Engineer
        </h1>

        <img
          src="./image 21.png"
          alt=""
          className="w-[300px]  mt-20"
          style={{
            filter: "drop-shadow(0px 0px 29px 12px rgba(34, 34, 34, 0.5))",
          }}
        />
      </div>
      <div className="lg:w-[50%] h-full p-10 lg:overflow-y-auto flex flex-col items-center pb-20">
        <div ref={aboutRef} className="w-full">
          <About />
        </div>
        <div ref={educationRef} className="w-full">
          <Education />
        </div>
        <div ref={experienceRef} className="w-full">
          <Experience />
        </div>
        <div ref={projectsRef} className="w-full">
          <Projects />
        </div>
        <div ref={contactRef} className="w-full">
          <Contact />
        </div>
        <section className="w-full min-h-[5vh] h-[5vh] hidden lg:block"></section>
      </div>
      <div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 text-white px-4 min-w-[350px] min-h-[50px] justify-around rounded-full bg-[#171717] flex gap-2 w-fit"
        style={{ boxShadow: "0px 0px 29px 12px rgba(34, 34, 34, 0.5)" }}
      >
        <Tooltip title="About" arrow>
          <IconButton onClick={() => scrollToSection(aboutRef)}>
            <img src="./image 20.svg" alt="About" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Education" arrow>
          <IconButton onClick={() => scrollToSection(educationRef)}>
            <img src="./image 21.svg" alt="Education" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Experience" arrow>
          <IconButton onClick={() => scrollToSection(experienceRef)}>
            <img src="./image 22.svg" alt="Experience" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Projects" arrow>
          <IconButton onClick={() => scrollToSection(projectsRef)}>
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/tech-service-3d-icon-download-in-png-blend-fbx-gltf-file-formats--call-logo-customer-man-web-hosting-pack-network-communication-icons-9544298.png" alt="Projects" className="h-[50px]" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Contact" arrow>
          <IconButton onClick={() => scrollToSection(contactRef)}>
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/contact-us-5463861-4568183.png" alt="Contact" className="h-[45px]"/>
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Page;
