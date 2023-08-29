import React from "react";

function Navigation ({ currentPage, setCurrentPage }) {
    return (
        <ul>
            <li>
                <a
                href='#about'
                onClick={() => setCurrentPage('about')}
                className={currentPage === 'about' ? 'nla' : ''}
                >
                About Me
                </a>
            </li>
            <li>
                <a
                href='#portfolio'
                onClick={() => setCurrentPage('portfolio')}
                className={currentPage === 'portfolio' ? 'nla' : ''}
                >
                Portfolio
                </a>
            </li>
            <li>
                <a
                href='#contact'
                onClick={() => setCurrentPage('contact')}
                className={currentPage === 'contact' ? 'nla' : ''}
                >
                Contact Me
                </a>
            </li>
            <li>
                <a
                href='#resume'
                onClick={() => setCurrentPage('resume')}
                className={currentPage === 'resume' ? 'nla' : ''}
                >
                Resume
                </a>
            </li>
        </ul>
    )
}

export default Navigation;