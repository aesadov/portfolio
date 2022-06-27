import React from 'react';
import style from './Title.module.scss';
type TitlePropsType = {
    title: string
    secondTitle: string
    view?: 'white'
}

export const Title = (props: TitlePropsType) => {
    return (
        <div className={props.view === 'white'? style.titleWhite: style.title}>
            <h2>{props.title}</h2>
            <h3>{props.secondTitle}</h3>
        </div>
    );
}
