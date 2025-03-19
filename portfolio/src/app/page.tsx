import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const Page = () => {
  return (
    <div className="w-full h-screen bg-[#070707] flex justify-center items-center relative">
      <div className="absolute top-6 left-0 min-w-[180px] h-[50px] px-4 flex justify-around">
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
      </div>

      <div
        className="absolute bottom-6 shadow-custom-shadow text-white px-4 min-w-[180px] min-h-[50px] justify-around rounded-full bg-[#171717] flex gap-2 w-fit"
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
