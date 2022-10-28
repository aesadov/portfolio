import React from 'react';
import {Nav} from './nav/Nav';
import {BurgerNav} from './burgerNav/BurgerNav';

export const Header = () => {
    return <div>
        <Nav/>
        <BurgerNav/>
    </div>
}