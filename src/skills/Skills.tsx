import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from './Skill/Skill';
import {Title} from '../common/Components/Title/Title';
import jsImage from '../assets/image/js.svg';
import cssImage from '../assets/image/css.svg';
import reactImage from '../assets/image/react.svg';
import tsImage from '../assets/image/typescript.svg';
import reduxImage from '../assets/image/redux.svg';
import htmlImage from '../assets/image/html-5.svg';
import sassImage from '../assets/image/sass.svg';
import restApiImage from '../assets/image/restApiIcon.svg';
import httpImage from '../assets/image/http.svg';
import httpsImage from '../assets/image/https.svg';
import axiosImage from '../assets/image/Axios.svg';
import jestImage from '../assets/image/jest.svg';
import storyBookImage from '../assets/image/StoryBook.svg';
import postmanImage from '../assets/image/postman.svg';
import materialUiImage from '../assets/image/material-ui.svg';
import antDesignImage from '../assets/image/ant-design.svg';
import gitImage from '../assets/image/git.svg';
import gitHubImage from '../assets/image/github.svg';

export const Skills = () => {
    const jsStyle = {backgroundImage: `url(${jsImage})`}
    const cssStyle = {backgroundImage: `url(${cssImage})`}
    const reactStyle = {backgroundImage: `url(${reactImage})`}
    const tsStyle = {backgroundImage: `url(${tsImage})`}
    const reduxStyle = {backgroundImage: `url(${reduxImage})`}
    const htmlStyle = {backgroundImage: `url(${htmlImage})`}
    const sassStyle = {backgroundImage: `url(${sassImage})`}
    const restApiStyle = {backgroundImage: `url(${restApiImage})`}
    const httpStyle = {backgroundImage: `url(${httpImage})`}
    const httpsStyle = {backgroundImage: `url(${httpsImage})`}
    const axiosStyle = {backgroundImage: `url(${axiosImage})`}
    const jestStyle = {backgroundImage: `url(${jestImage})`}
    const storyBookStyle = {backgroundImage: `url(${storyBookImage})`}
    const postmanStyle = {backgroundImage: `url(${postmanImage})`}
    const materialUiStyle = {backgroundImage: `url(${materialUiImage})`}
    const antDesignStyle = {backgroundImage: `url(${antDesignImage})`}
    const gitStyle = {backgroundImage: `url(${gitImage})`}
    const gitHubStyle = {backgroundImage: `url(${gitHubImage})`}

    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'My Skills'} secondTitle={'There are my core skills'}/>
                <div className={style.skills}>
                    <Skill title={'Java Script'} style={jsStyle}/>
                    <Skill title={'Type Script'} style={tsStyle}/>
                    <Skill title={'React'} style={reactStyle}/>
                    <Skill title={'Redux'} style={reduxStyle}/>
                    <Skill title={'Redux-Thunk'} style={reduxStyle}/>
                    <Skill title={'Redux-Toolkit'} style={reduxStyle}/>
                    <Skill title={'Redux-Saga'} style={reduxStyle}/>
                    <Skill title={'React Router DOM'} style={reactStyle}/>
                    <Skill title={'HTML-5'} style={htmlStyle}/>
                    <Skill title={'CSS'} style={cssStyle}/>
                    <Skill title={'SASS'} style={sassStyle}/>
                    <Skill title={'Rest API'} style={restApiStyle}/>
                    <Skill title={'HTTP'} style={httpStyle}/>
                    <Skill title={'HTTPS'} style={httpsStyle}/>
                    <Skill title={'AXIOS'} style={axiosStyle}/>
                    <Skill title={'Jest'} style={jestStyle}/>
                    <Skill title={'Storybook'} style={storyBookStyle}/>
                    <Skill title={'Postman'} style={postmanStyle}/>
                    <Skill title={'Material-Ui'} style={materialUiStyle}/>
                    <Skill title={'Ant-design'} style={antDesignStyle}/>
                    <Skill title={'Git'} style={gitStyle}/>
                    <Skill title={'Git-Hub'} style={gitHubStyle}/>
                </div>
            </div>
        </div>
    );
}