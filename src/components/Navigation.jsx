import React from "react";

function Navigation ({ currentPage, setCurrentPage }) {
    return (
        <ul>
            <li>
                <a
                href='#about'
                onClick={() => setCurrentPage('about')}
                className={currentPage === 'about' ? 'nla' : 'nl'}
                >
                About Me
                </a>
            </li>
            <li>
                <a
                href='#portfolio'
                onClick={() => setCurrentPage('portfolio')}
                className={currentPage === 'portfolio' ? 'nla' : 'nl'}
                >
                Portfolio
                </a>
            </li>
            <li>
                <a
                href='#contact'
                onClick={() => setCurrentPage('contact')}
                className={currentPage === 'contact' ? 'nla' : 'nl'}
                >
                Contact Me
                </a>
            </li>
            <li>
                <a
                href='#resume'
                onClick={() => setCurrentPage('resume')}
                className={currentPage === 'resume' ? 'nla' : 'nl'}
                >
                Resume
                </a>
            </li>
        </ul>
    )
}

export default Navigation;