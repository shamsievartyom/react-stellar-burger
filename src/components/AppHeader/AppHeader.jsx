import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './AppHeader.module.css'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {

    const url = window.location.pathname

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <ul className={`mt-4 mb-4 ${styles.button__list}`}>
                    <li>
                        <NavLink to='/' className={`p-5 ${styles.button}`}>
                            <BurgerIcon type={url === '/' ? "primary" : "secondary"} />
                            <span className={`text text_type_main-default text_color_inactive ${url === '/' ? styles.button_active : ''}`}>Конструктор</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='something' className={`p-5 ${styles.button}`}>
                            <ListIcon type={url === '/something' ? "primary" : "secondary"} />
                            <span className={`text text_type_main-default text_color_inactive ${url === '/something' ? styles.button_active : ''}`}>Лента заказов</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Logo />
            <NavLink to="/profile" className={`mt-4 mb-4 p-5 ${styles.button} ${styles.button_type_profile}`}>
                <ProfileIcon type={url === '/profile' ? "primary" : "secondary"} />
                <span className={`text text_type_main-default text_color_inactive ${url === '/profile' ? styles.button_active : ''}`}>Личный кабинет</span>
            </NavLink>
        </header>
    )
}

export default AppHeader