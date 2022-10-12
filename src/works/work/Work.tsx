import React from 'react';
import style from './Work.module.scss';
import {imageStyleType} from '../Works';
type WorkPropsType = {
    projectName: string,
    style: imageStyleType,
    projectDescription: string,
    link?: string,
}

export const Work = (props: WorkPropsType) => {
    return (
        <div className={style.work}>
            <div className={style.picture} style={props.style}>
                <a href={props.link}><button className={style.viewBtn}>Watch more</button></a>
            </div>
            <div className={style.project}>
                <div className={style.Name}>{props.projectName}</div>
                <div className={style.Description}>{props.projectDescription}</div>
            </div>
        </div>
    );
}