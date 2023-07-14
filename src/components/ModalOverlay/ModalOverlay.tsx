import React, { FC, ReactNode } from 'react'
import styles from './ModalOverlay.module.css'
import { useNavigate } from 'react-router-dom'

type TModalOverlay = {
    children: ReactNode,
    closeModal: () => void,
}

const ModalOverlay: FC<TModalOverlay> = ({ closeModal, children }) => {

    const navigate = useNavigate()

    return (
        <div className={styles.cover} onClick={(e) => {
            if (e.target === e.currentTarget) {
                closeModal()
            }
        }}>
            {children}
        </div>
    )
}

export default ModalOverlay