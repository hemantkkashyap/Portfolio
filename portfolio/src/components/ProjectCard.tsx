import React from 'react';
import { GitHub, Launch } from '@mui/icons-material';
import { IconButton, CardContent } from '@mui/material';
interface ProjectCardProps {
    projectName: string;
    description: string;
    liveLink: string;
    githubLink: string;
    image: string;
  }
  
const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, liveLink, githubLink,description,image }) => {
   return (
    <div className="lg:w-[48%] min-h-[50vh] h-[50vh] bg-[#171717] rounded-[15px]"   style={{ boxShadow: "0px 0px 15px 0px rgba(34, 34, 34, 0.5)" }}>
      <CardContent sx={{ flexGrow: 1 }}>
      <p className="lg:text-[2vh] text-[2vh] text-[#B6B6B6] mt-3" >
            {projectName}
          </p>

          <img src={image} alt="" className='rounded-[5px] mt-2' />
      <p className="lg:text-[2vh] text-[2vh] text-[#B6B6B6] mt-3">
            {description}
          </p>

        <div className='mt-2'>
          {/* Live Link Button */}
          <IconButton 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Launch />
          </IconButton>

          {/* GitHub Link Button */}
          <IconButton 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <GitHub />
          </IconButton>
        </div>
      </CardContent>
    </div>
  );
};

export default ProjectCard;
