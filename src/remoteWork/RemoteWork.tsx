import React from 'react';
import style from './RemoteWork.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Link} from 'react-scroll';

export const RemoteWork = () => {
    return (
        <div className={style.remoteWork}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <h2>Considering options for remote work</h2>
                <Link
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}><button>Hire me now</button></Link>
            </div>
        </div>
    );
}