import React from 'react'

const Experience = () => {
  return (
    <section className="w-full lg:min-h-[90vh] lg:h-[90vh] lg:p-10 flex flex-col items-center mt-10">
          <p className="text-[5vh] text-[#B6B6B6] w-full">Experience</p>

          <div
            className="w-full min-h-[40vh] h-fit rounded-[5px] bg-[#171717] mt-6 p-4 relative"
            style={{ boxShadow: "0px 0px 15px 0px rgba(34, 34, 34, 0.5)" }}
          >
            <p>
              <span className="font-semibold"> Software Engineer Intern,</span>{" "}
              Zangoh
            </p>

            <ul className="list-disc mt-3 min-h-fit pl-6 flex flex-col gap-2">
              <li>
                Developed and optimized production-grade APIs for Zing Backend
                using Python, managing PostgreSQL and Redis for performance
                improvements.
              </li>
              <li>
                Led feature development and UI enhancements for Zing Project,
                integrating AI-driven capabilities and modernizing system
                architecture.
              </li>
              <li>
                {" "}
                Redesigned and optimized Zangoh AI and Zangoh Studio, achieving
                a 100% SEO score and improving system capabilities.
              </li>
              <li>
                Designed and deployed scalable containerized solutions using
                Docker on AWS and DigitalOcean, enhancing system reliability.
              </li>
            </ul>
          </div>

          <div
            className="w-full min-h-[25vh] h-fit rounded-[5px] bg-[#171717] mt-6 p-4 relative"
            style={{ boxShadow: "0px 0px 15px 0px rgba(34, 34, 34, 0.5)" }}
          >
            <p>
              <span className="font-semibold"> Contributor,</span> GirlScript
              Summer of Code
            </p>

            <ul className="list-disc mt-3 min-h-fit pl-6 flex flex-col gap-2">
              <li>
                Contributed to large-scale open-source projects focusing on
                React, Next.js, and GraphQL.
              </li>
              <li>
                Fixed bugs and added features to enhance project functionality
                in collaboration with developers worldwide.
              </li>
            </ul>
          </div>
        </section>
  )
}

export default Experience
