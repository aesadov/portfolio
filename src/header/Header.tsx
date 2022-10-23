import React from 'react';
import {Nav} from './nav/Nav';
import {BurgerNav} from './burgerNav/BurgerNav';

export const Header = () => {
    return <div>
        <Nav/>
        <BurgerNav/>
    </div>
}

/*<div className={style.header}>
            <div className={style.container}>
                <div className={style.logo}>PORTFOLIO</div>
                <div className={style.nav}>
                    <Link
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>Home</Link>
                    <Link
                        activeClass={style.active}
                        to="skils"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>Skills</Link>
                    <Link
                        activeClass={style.active}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-69}
                        duration={500}>Projects</Link>
                    <Link
                        activeClass={style.active}
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>Contacts</Link>
                </div>
            </div>
        </div>*/