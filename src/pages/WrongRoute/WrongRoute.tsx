import React, { FC } from 'react'
import styles from './WrongRoute.module.css'

const WrongRoute: FC = () => {
    return (
        <div className={styles.container}>
            <p className='text text_type_digits-large'>404</p>
            <h1 className={`text text_type_main-default ${styles.title}`}>Страница не найдена</h1>
        </div>
    )
}

export default WrongRoute