import React from "react";
import { oneProject } from "../data";

function ProjectPage() {
    return (
        <div>
            <h2>{oneProject.title}</h2>
            <h3>Created at: {oneProject.date_created}</h3>
            <h3>Pledges:</h3>
            <ul>
                {oneProject.pledges.map((pledgeData, key) => {
                    return (
                        <li>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
            <h5>This is still the project page (step 6 :)</h5>
        </div>
    );
    
}

export default ProjectPage;