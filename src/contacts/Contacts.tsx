import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>Contacts</h2>
                <form className={style.form} action="">
                    <input className={style.input} type="text"/>
                    <input className={style.input} type="text"/>
                    <textarea name="" id="" cols={5} rows={5}></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
}