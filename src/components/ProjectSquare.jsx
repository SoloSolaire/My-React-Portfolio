import React from "react";

function ProjectSquare ({ project }) {
    return(
        <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
                <a href={project.github}>App Repo</a>
            </div>
            <div>
                <a href={project.deployed}>
                    <div>
                        <img 
                            src={project.image}
                            alt={project.title}
                        />
                    </div>
                </a>
            </div>
        </div>
    )
};

export default ProjectSquare;