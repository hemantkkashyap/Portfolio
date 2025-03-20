import React from 'react'

const Education = () => {
  return (
    <section className="w-full lg:min-h-[40vh] lg:h-[40vh] lg:p-10 flex flex-col items-center ">
    <p className="text-[5vh] text-[#B6B6B6] w-full">Education</p>

    <div
      className="w-full h-[15vh] rounded-[5px] bg-[#171717] mt-6 p-4 relative"
      style={{ boxShadow: "0px 0px 15px 0px rgba(34, 34, 34, 0.5)" }}
    >
      <p>
        <span className="font-semibold">
          Sushila Devi Bansal College of Technology, Indore
        </span>
      </p>
      <p> B-Tech in Information Technology</p>

      <p>
        {" "}
        <span className="font-semibold mt-6">CGPA :</span> 7.52
      </p>
    </div>
  </section>
  )
}

export default Education
