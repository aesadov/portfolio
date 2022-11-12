import React from 'react';
import style from './BlueComponent.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Link} from 'react-scroll';

type RemoteWorkPropsType = {
    text: string
    buttonText: string
}

export const BlueComponent = ({text, buttonText}: RemoteWorkPropsType) => {
    return (
        <div className={style.blueComponent}>
            <div className={`${styleContainer.container} ${style.blueComponentContainer}`}>
                <h2>{text}</h2>
                <Link
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}><button>{buttonText}</button></Link>
            </div>
        </div>
    );
}