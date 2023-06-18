import { useRef, useEffect, Suspense } from 'react'
import styles from './Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { useNavigate } from 'react-router-dom';

const modalRoot = document.getElementById('modal-root');
function Modal({ children, closeModal }) {

    const navigate = useNavigate()

    useEffect(() => {
        function closeByEscape(evt) {
            if (evt.key === 'Escape') {
                closeModal();
                navigate("/")
            }
        }
        document.addEventListener('keydown', closeByEscape);
        return () => {
            document.removeEventListener('keydown', closeByEscape);
        }

    }, [])

    return (
        ReactDOM.createPortal(
            <ModalOverlay closeModal={closeModal}>
                <section className={styles.window}>
                    <button onClick={() => { closeModal(); navigate('/') }} className={styles.exit__button} type="button">
                        <CloseIcon type="primary" />
                    </button>
                    {children}
                </section>
            </ModalOverlay>
            , modalRoot
        )
    )
}

Modal.propTypes = {
    children: PropTypes.object,
    closeModal: PropTypes.func,
};

export default Modal