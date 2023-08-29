import React from "react";
import Navigation from "./Navigation";

function Header ({ currentPage, setCurrentPage }) {
    return (
        <header>
            <h1>Jed Smith</h1>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </header>
    );
}

export default Header;