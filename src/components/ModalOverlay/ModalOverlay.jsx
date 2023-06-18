import React from 'react'
import styles from './ModalOverlay.module.css'
import { useNavigate } from 'react-router-dom'

function ModalOverlay({ closeModal, children }) {

    const navigate = useNavigate()

    return (
        <div className={styles.cover} onClick={(e) => {
            if (e.target === e.currentTarget) {
                closeModal()
                navigate("/")
            }
        }}>
            {children}
        </div>
    )
}

export default ModalOverlay