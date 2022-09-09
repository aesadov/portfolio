import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import telegramImage from '../assets/image/telegramIcons.svg';
import vkImage from '../assets/image/vkIcon.svg';
import instagramImage from '../assets/image/instagramIcon.svg';
import watsAppInImage from '../assets/image/whatsappIcon.svg';

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Artem Sadov</h2>
                <div className={style.socialNetworks}>
                    <SocialNetwork style={telegramImage} link='https://t.me/SadovArtem' alt='telegtram logo'/>
                    <SocialNetwork style={vkImage} link='https://vk.com/a.e.sadov' alt='vk logo'/>
                    <SocialNetwork style={instagramImage} link='https://instagram.com/a.e.sadov' alt='instagram logo'/>
                    <SocialNetwork style={watsAppInImage} link='https://wa.me/79877500555' alt='watsApp logo'/>
                </div>
                <span>Ⓒ 2022 All rights reserved</span>
            </div>
        </div>
    );
}

type SocialNetworkPropsType = {
    style: string
    link: string
    alt: string
}

const SocialNetwork = (props: SocialNetworkPropsType) => {
    return <a href={props.link} target='_blank'>
        <img src={props.style} alt={props.alt} />
    </a>
}
