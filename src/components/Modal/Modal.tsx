import { useRef, useEffect, Suspense, FC, ReactNode } from 'react'
import styles from './Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { useNavigate } from 'react-router-dom';

type TModal = {
    children: ReactNode,
    closeModal: () => void,
}

const modalRoot = document.getElementById('modal-root');

const Modal: FC<TModal> = ({ children, closeModal }) => {

    const navigate = useNavigate()

    useEffect(() => {
        function closeByEscape(evt: KeyboardEvent) {
            if (evt.key === 'Escape') {
                closeModal();
                navigate(-1)
            }
        }
        document.addEventListener('keydown', closeByEscape);
        return () => {
            document.removeEventListener('keydown', closeByEscape);
        }

    }, [])

    return (
        modalRoot ? (
            ReactDOM.createPortal(
                <ModalOverlay closeModal={closeModal}>
                    <section className={styles.window}>
                        <button onClick={() => { closeModal(); navigate(-1) }} className={styles.exit__button} type="button">
                            <CloseIcon type="primary" />
                        </button>
                        {children}
                    </section>
                </ModalOverlay>
                , modalRoot
            )
        ) : (null)
    )
}

export default Modal