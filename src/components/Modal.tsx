import React from 'react';
import ReactDom from 'react-dom';
import ModalCSS from './ModalCSS.module.css';

const Modal = () => {
    return ReactDom.createPortal(
        <div className={ModalCSS.modal_container}>
            <div className={ModalCSS.modal}>
                <header className={ModalCSS.modal_header}>
                    <h2 className={ModalCSS.title}>Add new skill:</h2>
                </header>
                <input type="text" />
                <footer className={ModalCSS.modal_footer}>
                    <button className={ModalCSS.modal_discard}>Discard</button>
                    <button className={ModalCSS.modal_add}>Add</button>
                </footer>
            </div>
        </div>,
        document.getElementById('modal')!
    );
};

export default Modal;
