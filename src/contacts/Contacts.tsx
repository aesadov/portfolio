import React from 'react'
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from '../common/Components/Title/Title'
import axios from 'axios';


export const Contacts = () => {


    return (
        <div id="contacts" className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={`Let's get in touch`} secondTitle={'Use this form to send me your offer'} view={'white'}
                       link={true}/>
                <form onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault()
                    const target = e.target as typeof e.target & {
                        name: { value: string }
                        contacts: { value: string }
                        message: { value: string }
                    }
                    axios.post('http://localhost:3010/sendMessage', {
                        name: target.name.value,
                        contacts: target.contacts.value,
                        message: target.message.value,
                    }).then(() => {
                        alert(`Thank you for your offer! I'll answer you as soon as I have free time` )
                    })
                }} className={style.contactForm} action="">

                    <input placeholder="Your name" className={style.input} type="text" name="name"/>
                    <input placeholder="Your contacts" className={style.input} type="text" name="contacts"/>
                    <textarea placeholder="Message" className={`${style.input} ${style.textarea}`} name="message" id=""
                              cols={5} rows={5}></textarea>
                    <button type="submit">Get in touch</button>
                </form>

            </div>
        </div>
    );
}