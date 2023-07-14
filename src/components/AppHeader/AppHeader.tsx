import { useRef, FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './AppHeader.module.css'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader: FC = () => {

    const url = window.location.pathname

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <ul className={`mt-4 mb-4 ${styles.button__list}`}>
                    <li>
                        <NavLink to='/' className={`p-5 ${styles.button}`}>
                            <BurgerIcon type={url.endsWith("react-stellar-burger") ? "primary" : "secondary"} />
                            <span className={`text text_type_main-default text_color_inactive ${url.endsWith("react-stellar-burger") ? styles.button_active : ''}`}>Конструктор</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='feed' className={`p-5 ${styles.button}`}>
                            <ListIcon type={url.includes('/feed') ? "primary" : "secondary"} />
                            <span className={`text text_type_main-default text_color_inactive ${url.includes('/feed') ? styles.button_active : ''}`}>Лента заказов</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Logo />
            <NavLink to="/profile" className={`mt-4 mb-4 p-5 ${styles.button} ${styles.button_type_profile}`}>
                <ProfileIcon type={url.includes('/profile') ? "primary" : "secondary"} />
                <span className={`text text_type_main-default text_color_inactive ${url.includes('/profile') ? styles.button_active : ''}`}>Личный кабинет</span>
            </NavLink>
        </header>
    )
}

export default AppHeader