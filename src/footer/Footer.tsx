import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Artem Sadov</h2>
                <div className={style.pryamougolnik}>
                    <div className={style.kvadratik}></div>
                    <div className={style.kvadratik}></div>
                    <div className={style.kvadratik}></div>
                    <div className={style.kvadratik}></div>
                </div>
                <span>Ⓒ 2022 All rights reserved</span>
            </div>
        </div>
    );
}