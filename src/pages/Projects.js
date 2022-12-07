import React from 'react';
import Nav from '../components/Nav';
import ProjectCard from '../components/ProjectCard';

// SRC
import Footer from '../components/Footer';
import {data} from '../utils/data';
import { useState } from 'react';
import { useEffect } from 'react';


const Projects = () => {

    const [projects, setProjects] = useState(data);
    const [isFiltered, setIsFiltered] = useState(null);
    
    const handleFilter = (e) => {
        setIsFiltered(e.target.id);
        if(e.target.id){
            let newData = projects.filter(el => el.stack.includes(e.target.id) == true);
            setProjects(newData)
        }
        else{
            setProjects(data);
        }
    }
    // useEffect((handleFilter) => {
        
    // },[projects]);
    return (
        <div className='projects'>
            <Nav />
            <div className="btn-container">
                <button className='projects-sort-btn' id="REACT" onClick={(e) => handleFilter(e)}>React</button>
                <button className='projects-sort-btn' id="REDUX"onClick={(e) => handleFilter(e)}>Redux</button>
                <button className='projects-sort-btn' id="FULLSTACK">Fullstack</button>
                <button className='projects-sort-btn' id="INTEGRATION">Integration</button>
                <button className='projects-sort-btn' id="EVERY">Every</button>
            </div>
            <div className="projects-container">
                
                {
                projects.map((project) =>(
                    <ProjectCard key={project.id} projectData={project}/>
                ))
                }
                
            </div>
            <Footer />
        </div>
    );
};

export default Projects;