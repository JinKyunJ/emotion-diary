import React from 'react';
import './Header.css';

const Header = ({ title, leftChild, rightChild }) => {
    return (
        <header className="Header">
            <div className="headerLeft">{leftChild}</div>
            <div className="headerCenter">{title}</div>
            <div className="headerRight">{rightChild}</div>
        </header>
    );
};

export default Header;
