import React from 'react';
import style from './Header.module.scss';

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.logo}>LOGO</div>
                <div className={style.nav}>
                    <a href="">Home</a>
                    <a href="">Skills</a>
                    <a href="">Projects</a>
                    <a href="">Contacts</a>
                </div>
            </div>
        </div>
    );
}