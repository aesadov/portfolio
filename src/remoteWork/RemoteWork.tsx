import React from 'react';
import style from './RemoteWork.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const RemoteWork = () => {
    return (
        <div className={style.remoteWork}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <h2>Considering options for remote work</h2>
                <button>Hire me</button>
            </div>
        </div>
    );
}