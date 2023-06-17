import { NavLink } from 'react-router-dom'
import styles from './AppHeader.module.css'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <ul className={`mt-4 mb-4 ${styles.button__list}`}>
                    <li>
                        <NavLink to='/' className={`p-5 ${styles.button}`}>
                            <BurgerIcon type="secondary" />
                            <span className="text text_type_main-default text_color_inactive">Конструктор</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='something' className={`p-5 ${styles.button}`}>
                            <ListIcon type="secondary" />
                            <span className="text text_type_main-default text_color_inactive">Лента заказов</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Logo />
            <NavLink to="/profile" className={`mt-4 mb-4 p-5 ${styles.button} ${styles.button_type_profile}`}>
                <ProfileIcon type="secondary" />
                <span className="text text_type_main-default text_color_inactive">Личный кабинет</span>
            </NavLink>
        </header>
    )
}

export default AppHeader