import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <h1>Hi there! I am Artem, Frontend Developer</h1>
                    <p>My background is in both programming and design. I have freelanced in the past, and now I’m
                        looking for a full-time Frontend developer at Some Great Company</p>
                    <div className={style.buttons}>
                        <button className={style.btnInfo}>more info</button>
                        <button className={style.btnContact}>contact me</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
