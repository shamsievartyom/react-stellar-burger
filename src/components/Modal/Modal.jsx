import { useRef, useEffect, Suspense } from 'react'
import styles from './Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

function Modal({ children, closeModal }) {

    Modal.propTypes = {
        children: PropTypes.object,
    };

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

    const cover = useRef(null);

    const modalRoot = document.getElementById('modal-root');

    return (
        ReactDOM.createPortal(
            <div className={styles.cover} ref={cover} onClick={(e) => { if (e.target === cover.current) closeModal() }}>
                <form className={styles.window}>
                    <button onClick={closeModal} className={styles.exit__button} type="button">
                        <CloseIcon type="primary" />
                    </button>
                    {children}
                </form>
            </div>
            , modalRoot
        )
    )
}

export default Modal