import React, {useState} from 'react'
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from '../common/Components/Title/Title'
import axios from 'axios';
import {Modal} from '../common/Components/Modal/Modal';


export const Contacts = () => {

    const [disabled, setDisabled] = useState(false)
    const [modalActive, setModalActive] = useState(false)

    return (
        <div id="contacts" className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={`Let's get in touch`} secondTitle={'Use this form to send me your offer'} view={'white'}
                       link={true}/>
                <form onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault()
                    setDisabled(true)
                    const target = e.target as typeof e.target & {
                        name: { value: string }
                        contacts: { value: string }
                        message: { value: string }
                    }
                    axios.post('https://smtp-nodejs-server.onrender.com/sendMessage', {
                        name: target.name.value,
                        contacts: target.contacts.value,
                        message: target.message.value,
                    }).then(() => {
                        setDisabled(false)
                        setModalActive(true)
                    })
                }} className={style.contactForm} action="">

                    <input placeholder="Your name" className={style.input} type="text" name="name"/>
                    <input placeholder="Your contacts" className={style.input} type="text" name="contacts"/>
                    <textarea placeholder="Message" className={`${style.input} ${style.textarea}`} name="message" id=""
                              cols={5} rows={5}></textarea>
                    <button disabled={disabled} type="submit">Get in touch</button>
                </form>

            </div>

            <Modal active={modalActive} setActive={setModalActive}>
                <div className={style.modal}>
                    <div>Thank you for your offer! I'll answer you as soon as I have free time</div>
                    <button onClick={() => setModalActive(false)}>ok</button>
                </div>
            </Modal>
        </div>
    );
}