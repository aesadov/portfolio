import React from 'react';
import style from './RemoteWork.module.scss';
import styleContainer from '../common/styles/Container.module.scss'

export const RemoteWork = () => {
    return (
        <div className={style.remoteWork}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <h2>Considering options for remote work</h2>
                <button>Hire me now</button>
            </div>
        </div>
    );
}