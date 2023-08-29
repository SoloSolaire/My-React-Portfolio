import React from "react";
import resume from '../assets/images/mock-resume.pdf';

function Resume () {
    return (
        <section id="resume" className="resume-section">
            <h2>Resume</h2>
            <embed src={resume} title="Resume"></embed>
        </section>
    )
}

export default Resume;