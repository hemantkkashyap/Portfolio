import React from 'react'

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
    { image: "./image 21 (1).svg" },
    { image: "./image 11.svg" },
    { image: "./image 12.svg" },
    { image: "./image 13.svg" },
    { image: "./image 14.svg" },
    { image: "./image 15.svg" },
    { image: "./image 16.svg" },
    { image: "./image 17.svg" },
  ];

  
const About = () => {
  return (
    <section className="w-full lg:h-[150vh]  lg:p-10 flex flex-col items-center ">
          <p className="text-[5vh] text-[#B6B6B6] w-full">About Me</p>

          <p className="lg:text-[3vh] text-[2vh] text-[#B6B6B6] mt-3">
            Hi, I&apos;m Hemant Kumar Kashyap, a passionate Software Engineer focused
            on building scalable and efficient solutions. With a strong
            foundation in backend development and front-end technologies, I
            strive to create high-performance software that solves real-world
            problems.
          </p>

          <p className="lg:text-[3vh] text-[2vh] text-[#B6B6B6] mt-3">
            I specialize in Python, JavaScript, React.js, and Node.js, with a
            deep interest in cloud computing and containerization technologies.
            My goal is to build software that&apos;s not only functional but also
            optimized for performance and user experience.
          </p>

          <p className="lg:text-[3vh] text-[2vh] text-[#B6B6B6] mt-3">
            I am constantly exploring new tools and technologies to improve my
            skills and stay up-to-date with the latest trends in the software
            industry. Whether it&apos;s designing a robust backend or crafting a
            seamless front-end, I&apos;m dedicated to building impactful
            applications.
          </p>

          {/* Technology / Skills Images */}
          <div className="lg:w-[80%] min-h-[40vh] mt-10 flex gap-3 flex-wrap justify-center items-center">
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
  )
}

export default About
