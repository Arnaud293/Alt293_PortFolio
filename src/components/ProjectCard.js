import React from 'react';

const ProjectCard = ({projectData, key}) => {
    
    return (
        <div className='project-card'>
            <div className="project-card-front">
                <img src={projectData.img} alt="project-image" />
            </div>
            <div className="project-card-back">
                <h1>{projectData.title}</h1>
                <img src={projectData.imgBack} alt={projectData.alt} />
            </div>
        </div>
    );
};

export default ProjectCard;