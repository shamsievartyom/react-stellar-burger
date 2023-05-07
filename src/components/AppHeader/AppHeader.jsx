import styles from './AppHeader.module.css'
import { Button, Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <ul className={`mt-4 mb-4 ${styles.button__list}`}>
                    <li>
                        <a className={`p-5 ${styles.button}`}>
                            <BurgerIcon type="secondary" />
                            <span className="text text_type_main-default text_color_inactive">Конструктор</span>
                        </a>
                    </li>
                    <li>
                        <a className={`p-5 ${styles.button}`}>
                            <ListIcon type="secondary" />
                            <span className="text text_type_main-default text_color_inactive">Лента заказов</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <Logo />
            <a className={`mt-4 mb-4 p-5 ${styles.button} ${styles.button_type_profile}`}>
                <ProfileIcon type="secondary" />
                <span className="text text_type_main-default text_color_inactive">Личный кабинет</span>
            </a>
        </header>
    )
}

export default AppHeader