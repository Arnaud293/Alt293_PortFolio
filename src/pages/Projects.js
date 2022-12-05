import React from 'react';
import Nav from '../components/Nav';
import ProjectCard from '../components/ProjectCard';

// SRC
import Footer from '../components/Footer';
import {data} from '../utils/data';
console.log(data)

const Projects = () => {
    return (
        <div className='projects'>
            <Nav />
            <div className="btn-container">
                <button className='projects-sort-btn'>React</button>
                <button className='projects-sort-btn'>Redux</button>
                <button className='projects-sort-btn'>Fullstack</button>
                <button className='projects-sort-btn'>Integration</button>
            </div>
            <div className="projects-container">
                {data.map((project) =>(
                    <ProjectCard key={project.id} projectData={project}/>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Projects;