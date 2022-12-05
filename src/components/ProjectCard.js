import React from 'react';

const ProjectCard = ({projectData, key}) => {
    
    return (
        <div className='project-card'>
            <img src={projectData.img} alt="" />
        </div>
    );
};

export default ProjectCard;