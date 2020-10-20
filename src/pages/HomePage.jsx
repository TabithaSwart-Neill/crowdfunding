import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        setProjectList(allProjects);
    }, []);


    return (
        <div id="project-list">
            {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
                // <div key={key}>{projectData.title}</div>;
                
            })}
            <h5> This is still the home page (step 5 :)</h5>
        </div>
    );
}

export default HomePage;