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
                <Title title={'My works'} secondTitle={'Look at my work'}/>
                    <div className={style.works}>
                        <Work projectName={'Social network'}
                              link={'https://aesadov.github.io/Social_Network_WayOfSamuray'}
                              style={socialStyle}
                              projectDescription={'Self-learning project. Social network app with using react hooks, routing, lazy loading. Working with REST api, login/logout flow, pagination, form and validation/file uploading. Using unit-tests for code workability check. React/Redux/TypeScript/Redux-thunk/React-router-dom v6/React-hook-form/Axios/Jest'}/>
                        <Work projectName={'Todo list'}
                              style={todoStyle}
                              projectDescription={'Learning project. Todolist app created with react hooks, routing and redirects, material UI, REST api request/response flow, unit-tests. React/Redux/Redux-Toolkit/React-router-dom v6/Jest(Unit-Tests) /Storybook/\n' +
                                  'Axios /Formik/Material UI'}/>
                    </div>
            </div>
        </div>
    );
}