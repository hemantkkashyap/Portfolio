import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const data = [
  { image: "./image 1.svg" },
  { image: "./image 2.svg" },
  { image: "./image 3.svg" },
  { image: "./image 4.svg" },
  { image: "./image 5.svg" },
  { image: "./image 6.svg" },
  { image: "./image 7.svg" },
  { image: "./image 8.svg" },
  { image: "./image 9.svg" },
  { image: "./image 10.svg" },
  { image: "./image 11.svg" },
  { image: "./image 12.svg" },
  { image: "./image 13.svg" },
  { image: "./image 14.svg" },
  { image: "./image 15.svg" },
  { image: "./image 16.svg" },
  { image: "./image 17.svg" },
];


const Page = () => {
  return (
    <div className="w-full h-screen bg-[#070707] flex justify-center items-center relative text-[#B6B6B6]">
      {/* <div className="absolute top-6 left-0 min-w-[180px] h-[50px] px-4 flex justify-around">
        <Tooltip title="About" arrow>
          <IconButton>
            <img
              src="./image 22 (1).svg"
              alt="Image 20"
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="Education" arrow>
          <IconButton>
            <img
              src="./image 21 (1).svg"
              alt="Image 21"
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="Experience" arrow>
          <IconButton>
            <img
              src="./image 23.svg"
              alt="Image 22"
            />
          </IconButton>
        </Tooltip>
      </div> */}

      <div className="w-[50%] h-full p-20">

        <h1 className="text-white text-[#B6B6B6] text-[8vh] max-w-[500px] leading-[9vh]">Hii, I am Hemant Kashyap , Software Engineer
        </h1>

        <img src="./image 21.png" alt="" className="w-[300px]  mt-20"
          style={{ filter: 'drop-shadow(0px 0px 29px 12px rgba(34, 34, 34, 0.5))' }} />
      </div>
      <div className="w-[50%] h-full p-10 overflow-y-auto flex flex-col items-center">

  {/* About Me Section */}
  <section className="w-full h-[150vh] h-fit p-10 flex flex-col items-center">
    <p className="text-[5vh] text-[#B6B6B6] w-full">About Me</p>

    <p className="text-[3vh] text-[#B6B6B6] mt-3">
      Hi, I'm Hemant Kumar Kashyap, a passionate Software Engineer focused on building scalable and efficient solutions. 
      With a strong foundation in backend development and front-end technologies, I strive to create high-performance 
      software that solves real-world problems.
    </p>

    <p className="text-[3vh] text-[#B6B6B6] mt-3">
      I specialize in Python, JavaScript, React.js, and Node.js, with a deep interest in cloud computing and containerization 
      technologies. My goal is to build software that’s not only functional but also optimized for performance and user experience.
    </p>

    <p className="text-[3vh] text-[#B6B6B6] mt-3">
      I am constantly exploring new tools and technologies to improve my skills and stay up-to-date with the latest trends in 
      the software industry. Whether it’s designing a robust backend or crafting a seamless front-end, I’m dedicated to 
      building impactful applications.
    </p>

    {/* Technology / Skills Images */}
    <div className="w-[80%] min-h-[40vh] mt-10 flex gap-3 flex-wrap justify-center items-center">
      {data.map((item, index) => (
          <img 
          key={index}
            src={item.image} 
            alt={`Technology logo ${index + 1}`} 
            className="max-w-[50px]" 
            loading="lazy"
          />
      ))}
    </div>
  </section>

  {/* Education Section */}
  <section className="w-full min-h-[30vh] h-[30vh] p-10 flex flex-col items-center">
    <p className="text-[5vh] text-[#B6B6B6] w-full">Education</p>
    
    <div className="w-full h-[15vh] rounded-[5px] bg-[#171717] mt-6 p-4 relative" 
     style={{ boxShadow: "0px 0px 15px 0px rgba(34, 34, 34, 0.5)" }}>

      <p><span className="font-semibold">Sushila Devi Bansal College of Technology, Indore</span></p>
      <p> B-Tech in Information
      Technology</p>

      <p> <span className="font-semibold mt-6">CGPA :</span> 7.52</p>
      </div>
  </section>

  <section className="w-full min-h-[30vh] h-[30vh] p-10 flex flex-col items-center">
    <p className="text-[5vh] text-[#B6B6B6] w-full">Experience</p>
    
    <div className="w-full min-h-[40vh] h-fit rounded-[5px] bg-[#171717] mt-6 p-4 relative" 
     style={{ boxShadow: "0px 0px 15px 0px rgba(34, 34, 34, 0.5)" }}>

      <p><span className="font-semibold"> Software Engineer Intern,</span> Zangoh</p>

      <ul className="list-disc mt-3 min-h-fit pl-6">
        <li>Developed and optimized production-grade APIs for Zing Backend using Python, managing PostgreSQL and
        Redis for performance improvements.</li>
        <li>Developed and optimized production-grade APIs for Zing Backend using Python, managing PostgreSQL and
        Redis for performance improvements.</li>
        <li>Developed and optimized production-grade APIs for Zing Backend using Python, managing PostgreSQL and
        Redis for performance improvements.</li>
        <li>Developed and optimized production-grade APIs for Zing Backend using Python, managing PostgreSQL and
        Redis for performance improvements.</li>
      </ul>
      </div>
  </section>

</div>
      <div
        className="absolute bottom-6 shadow-custom-shadow text-white px-4
         min-w-[180px] min-h-[50px] justify-around rounded-full bg-[#171717] flex gap-2 w-fit"
        style={{ boxShadow: "0px 0px 29px 12px rgba(34, 34, 34, 0.5)" }}
      >
        <Tooltip title="About" arrow>
          <IconButton>
            <img src="./image 20.svg" alt="Image 20" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Education" arrow>
          <IconButton>
            <img src="./image 21.svg" alt="Image 21" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Experience" arrow>
          <IconButton>
            <img src="./image 22.svg" alt="Image 22" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Page;
