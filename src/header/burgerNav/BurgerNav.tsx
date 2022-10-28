import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {Link} from 'react-scroll'

export const BurgerNav = () => {
    const [menuIsOpen, setMenu] = useState(false)
    const menuIsOpenHandler = () => {
        setMenu(!menuIsOpen)
    }

    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.logo}>PORTFOLIO</div>
                <div className={menuIsOpen? `${style.navItems} ${style.show}`: style.navItems}>
                    <div className={style.nav}>
                        <Link
                            to="main"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>Home</Link>
                        <Link
                            activeClass={style.active}
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={500}>Projects</Link>
                        <Link
                            activeClass={style.active}
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={500}>Skills</Link>
                        <Link
                            activeClass={style.active}
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={500}>Contacts</Link>

                    </div>
                </div>
                {menuIsOpen? <div onClick={menuIsOpenHandler} className={style.crossBtn}></div>
                : <div onClick={menuIsOpenHandler} className={style.burgerBtn}></div>}
            </div>
        </div>
    );
}