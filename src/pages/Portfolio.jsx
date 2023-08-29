import React from "react";
import ProjectSquare from "../components/ProjectSquare";
import projectData from "../components/data/projectData";

function Portfolio () {
    return (
        <section id="portfolio" className="portfolio-section">
            <h2>Portfolio</h2>
            <div>
                {projectData.map((project, index) => (
                    <ProjectSquare key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Portfolio;