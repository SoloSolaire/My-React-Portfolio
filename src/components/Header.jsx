import React from "react";
import Navigation from "./Navigation";

function Header ({ currentPage, SetCurrentPage }) {
    return (
        <header>
            <h1>Jed Smith</h1>
            <Navigation currentPage={currentPage} SetCurrentPage={SetCurrentPage} />
        </header>
    );
}

export default Header;