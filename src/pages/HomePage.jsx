import React from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
    return (
        <div id="project-list">
            {allProjects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
                // <div key={key}>{projectData.title}</div>;
                
            })}
            <h5> This is still the home page (step 5 :)</h5>
        </div>
    );
}

export default HomePage;