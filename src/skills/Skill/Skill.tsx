import React from 'react';
import style from './Skill.module.scss';
import {imageStyleType} from '../../works/Works';
type SkillPropsType = {
    title: string
    style: imageStyleType
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}