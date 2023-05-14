import { useRef, useEffect, Suspense } from 'react'
import styles from './Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

function Modal({ children, setModalVisability }) {

    Modal.propTypes = {
        children: PropTypes.object,
        setModalVisability: PropTypes.func,
    };

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') setModalVisability(false)
        });
    })

    const cover = useRef(null);
    return (
        <div className={styles.cover} ref={cover} onClick={(e) => { if (e.target === cover.current) setModalVisability(false) }}>
            <form className={styles.window}>
                <button onClick={() => setModalVisability(false)} className={styles.exit__button} type="button">
                    <CloseIcon type="primary" />
                </button>
                {children}
            </form>
        </div>
    )
}

export default Modal