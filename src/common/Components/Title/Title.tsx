import React from 'react';
import style from './Title.module.scss';
import {Link} from 'react-scroll';
type TitlePropsType = {
    title: string
    secondTitle: string
    view?: 'white'
    link?: boolean
}

export const Title = (props: TitlePropsType) => {
    return (
        <div className={props.view === 'white'? style.titleWhite: style.title}>
            <h2>{props.title}</h2>
            <h3>{props.secondTitle}</h3>
            {props.link && <div><span>or write to me on </span><Link to={'footer'}>social networks</Link></div>}
        </div>
    );
}
