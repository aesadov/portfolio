import React, {useState} from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import telegramImageBlue from '../assets/image/telegramIcons.svg';
import telegramImageGrey from '../assets/image/telegramGrey.svg';
import vkImageBlue from '../assets/image/vkIcon.svg';
import vkImageGrey from '../assets/image/vkGrey.svg';
import gitHubImageBlue from '../assets/image/iconGithubBlue.svg';
import gitHubImageGrey from '../assets/image/iconGithubGrey.svg';
import watsAppInImageBlue from '../assets/image/whatsappIcon.svg';
import watsAppInImageGrey from '../assets/image/whatsappGrey.svg';

export const Footer = () => {
    const thisYear = new Date().getFullYear().toString()
    return (
        <div id={'footer'} className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Artem Sadov</h2>
                <div className={style.socialNetworks}>
                    <SocialNetwork styleBlue={gitHubImageBlue} styleGrey={gitHubImageGrey} link="https://github.com/aesadov" alt="gitHub logo"/>
                    <SocialNetwork styleBlue={telegramImageBlue} styleGrey={telegramImageGrey} link="https://t.me/SadovArtem" alt="telegtram logo" />
                    <SocialNetwork styleBlue={vkImageBlue} styleGrey={vkImageGrey} link="https://vk.com/a.e.sadov" alt="vk logo"/>
                    <SocialNetwork styleBlue={watsAppInImageBlue} styleGrey={watsAppInImageGrey} link="https://wa.me/79877500555" alt="watsApp logo"/>
                </div>
                <span>Ⓒ {thisYear} All rights reserved</span>
            </div>
        </div>
    );
}

type SocialNetworkPropsType = {
    styleBlue: string
    styleGrey: string
    link: string
    alt: string
}

const SocialNetwork = (props: SocialNetworkPropsType) => {
    const [iconColor, setIconColor] = useState(true)

    const setIconColorHandler = () => {
        setIconColor(!iconColor)
    }

    return <a href={props.link} target="_blank" rel="noreferrer">
        <img src={iconColor ? props.styleBlue: props.styleGrey}
             alt={props.alt}
             onMouseOver={setIconColorHandler}
             onMouseLeave={setIconColorHandler}/>
    </a>
}
