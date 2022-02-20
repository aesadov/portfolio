import React from 'react';
import style from './Work.module.css';
type WorkPropsType = {
    projectName: string,
    projectDescription: string,
}

export const Work = (props: WorkPropsType) => {
    return (
        <div className={style.work}>
            <div className={style.picture}>
                <button>Watch more</button>
            </div>
            <div className={style.project}>
                <div className={style.Name}>{props.projectName}</div>
                <div className={style.Description}>{props.projectDescription}</div>
            </div>
        </div>
    );
}