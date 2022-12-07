import React from 'react';
import Nav from '../components/Nav';
import ProjectCard from '../components/ProjectCard';

// SRC
import Footer from '../components/Footer';
import {data} from '../utils/data';
import { useState } from 'react';


const Projects = () => {

    const [projects, setProjects] = useState(data);
    const [isFiltered, setIsFiltered] = useState(null);
    const [filteredProjects, setFilteredProjects] = useState([]);
    
    const handleFilter = (e) => {
        setIsFiltered(e.target.id);
        if(e.target.id){
            let newData = projects.filter(el => el.stack.includes(e.target.id) == true);
            setFilteredProjects(newData);
        }
        else{
            setProjects(data);
        }
    }

    return (
        <div className='projects'>
            <Nav />
            <div className="btn-container">
                <button className={isFiltered === "REACT" ? 'active-btn' : 'projects-sort-btn'} id="REACT" onClick={(e) => handleFilter(e)}  >
                    React
                </button>
                <button className={isFiltered === "REDUX" ? 'active-btn' : 'projects-sort-btn'} id="REDUX"onClick={(e) => handleFilter(e)}>
                    Redux
                </button>
                <button className='projects-sort-btn' id="FULLSTACK">
                    Fullstack
                </button>
                <button className='projects-sort-btn' id="INTEGRATION">
                    Integration
                </button>
                <button className={isFiltered === "EVERY" ? 'active-btn' : 'projects-sort-btn'} id="EVERY" onClick={(e) => setIsFiltered(e.target.id)}>
                    Every
                </button>
            </div>
            <div className="projects-container">
                
                {
                isFiltered === null || isFiltered == "EVERY" ? (
                projects.map((project) =>(
                    <ProjectCard key={project.id} projectData={project}/>
                ))
                ) : (
                filteredProjects.map((project) =>(
                    <ProjectCard key={project.id} projectData={project}/>
                ))  
                )
                }
                
            </div>
            <Footer />
        </div>
    );
};

export default Projects;