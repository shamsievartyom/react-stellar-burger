import React from 'react'
import styles from './ModalOverlay.module.css'

function ModalOverlay({closeModal, children }) {
    return (
        <div className={styles.cover} onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}>
            {children}
        </div>
    )
}

export default ModalOverlay