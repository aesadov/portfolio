import React from 'react'
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from '../common/Components/Title/Title'

export const Contacts = () => {
    return (
        <div id='contacts' className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={`Let's get in touch`} secondTitle={'Use this form to send me your offer'} view={'white'} link={true}/>
                <form className={style.contactForm} action="">
                    <input className={style.input} type="text"/>
                    <input className={style.input} type="text"/>
                    <textarea className={`${style.input} ${style.textarea}`} name="" id="" cols={5} rows={5}></textarea>
                </form>
                <button type="submit">Get in touch</button>
            </div>
        </div>
    );
}