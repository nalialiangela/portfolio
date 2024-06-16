import React from "react";
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <h1>Angela Naliali</h1>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;