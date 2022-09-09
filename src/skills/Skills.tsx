import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from './Skill/Skill';
import {Title} from '../common/Components/Title/Title';
import jsImage from '../assets/image/js.svg';
import cssImage from '../assets/image/css.svg';
import reactImage from '../assets/image/react.svg';

export const Skills = () => {
    const jsStyle = {
        backgroundImage: `url(${jsImage})`
    }
    const cssStyle = {
        backgroundImage: `url(${cssImage})`
    }
    const reactStyle = {
        backgroundImage: `url(${reactImage})`
    }

    return (
        <div id='skils' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'My Skills'} secondTitle={'Carrot cake gingerbread sugar plum'}/>
                <div className={style.skills}>
                    <Skill title={'java script'}
                           style={jsStyle}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '}/>
                    <Skill title={'css'}
                           style={cssStyle}
                           description={'Minim veniam, quis nostrud exercitation ullamco laboris '}/>
                    <Skill title={'react'}
                           style={reactStyle}
                           description={'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo'}/>
                </div>
            </div>
        </div>
    );
}