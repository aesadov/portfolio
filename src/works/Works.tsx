import React from 'react'
import style from './Works.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Work} from './work/Work'
import {Title} from '../common/Components/Title/Title'
import todoImage from '../assets/image/todoList.png'
import socialImage from '../assets/image/socialNetwork.png'
export type imageStyleType = {
    backgroundImage: string
}

export const Works = () => {
    const socialStyle = {
        backgroundImage: `url(${socialImage})`
    }
    const todoStyle = {
        backgroundImage: `url(${todoImage})`
    }
    return (
        <div id='projects' className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title title={'My works'} secondTitle={'Carrot cake gingerbread sugar plum'}/>
                    <div className={style.works}>
                        <Work projectName={'Social network'}
                              style={socialStyle}
                              projectDescription={'Biscuit donut biscuit wafer chocolate cake jelly. Cookie donut bear claw. Tart lollipop cupcake wafer oat cake chocolate bar ice cream.'}/>
                        <Work projectName={'Todo list'}
                              style={todoStyle}
                              projectDescription={'Biscuit donut biscuit wafer chocolate cake jelly. Cookie donut bear claw. Tart lollipop cupcake wafer oat cake chocolate bar ice cream.'}/>
                    </div>
            </div>
        </div>
    );
}