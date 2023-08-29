import React from "react";
import { useState } from "react";
import self from '../assets/images/self_crop.jpg'

function AboutMe () {
    const [currentPage, setCurrentPage] = useState('about');
    return (
        <div>
            <section id='about' className={currentPage === 'about' ? 'currentPage' : ''}>
            <h2>About Me</h2>
            <img src={self} alt='me' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
        </div>
    )
}

export default AboutMe;