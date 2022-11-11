import React, {Dispatch, SetStateAction} from 'react';
import './Modal.scss';

type ModalPropsType = {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    children: any
}

export const Modal = (props: ModalPropsType) => {
    return (
        <div className={props.active ? 'modal active' : 'modal'} onClick={()=> props.setActive(false)}>
            <div className={props.active ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>

    );
}
