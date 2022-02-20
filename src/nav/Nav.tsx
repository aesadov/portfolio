import React from 'react';
import style from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">main</a><a href="">skills</a><a href="">projects</a><a href="">contacts</a>
        </div>
    );
}