import { useRef, useEffect, Suspense } from 'react'
import styles from './Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');
function Modal({ children, closeModal }) {

    useEffect(() => {
        function closeByEscape(evt) {
            if (evt.key === 'Escape') {
                closeModal();
            }
        }
        document.addEventListener('keydown', closeByEscape);
        return () => {
            document.removeEventListener('keydown', closeByEscape);
        }

    }, [])

    return (
        ReactDOM.createPortal(
            <div className={styles.cover} onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}>
                <section className={styles.window}>
                    <button onClick={closeModal} className={styles.exit__button} type="button">
                        <CloseIcon type="primary" />
                    </button>
                    {children}
                </section>
            </div>
            , modalRoot
        )
    )
}

Modal.propTypes = {
    children: PropTypes.object,
    closeModal: PropTypes.func,
};

export default Modal