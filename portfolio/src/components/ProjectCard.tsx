import React from 'react';
import { GitHub, Launch } from '@mui/icons-material';
import { IconButton, CardContent } from '@mui/material';
interface ProjectCardProps {
    projectName: string;
    liveLink: string;
    githubLink: string;
  }
  
const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, liveLink, githubLink }) => {
   return (
    <div className="lg:w-[48%] min-h-[50vh] h-[50vh] bg-[#171717] rounded-[15px]"   style={{ boxShadow: "0px 0px 15px 0px rgba(34, 34, 34, 0.5)" }}>
      <CardContent sx={{ flexGrow: 1 }}>
      <p className="lg:text-[2vh] text-[2vh] text-[#B6B6B6] mt-3" >
            {projectName}
          </p>

          <img src="https://wallpapercave.com/wp/wp4511378.jpg" alt="" className='rounded-[5px] mt-2' />
      <p className="lg:text-[2vh] text-[2vh] text-[#B6B6B6] mt-3">
            Hi, I&apos;m Hemant Kumar Kashyap, a passionate Software Engineer focused
            on building scalable and efficient solutions. With a strong
            
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
