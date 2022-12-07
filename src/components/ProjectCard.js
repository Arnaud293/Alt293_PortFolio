import React from 'react';

const ProjectCard = ({projectData}) => {
    
    return (
        <div className='project-card'>
            <div className="project-card-front">
                <img src={projectData.img} alt="project-image" />
            </div>
            <div className="project-card-back">
                <div className="project-card-back-content">
                    <h1>{projectData.title}</h1>
                    <img src={projectData.imgBack} alt={projectData.alt} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;