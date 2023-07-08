import React, { FC } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import styles from './ProfileOverlay.module.css'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/thunks/auth'

const ProfileOverlay: FC = () => {

    const dispatch = useDispatch()

    const location = useLocation()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <main className={styles.container}>
            <div className={styles.left_menu__container}>
                <nav className={styles.nav}>
                    <ul className={styles.navigation__container}>
                        <li className={styles.navigation__list_element}>
                            <NavLink to="/profile" className={({ isActive }) =>
                                location.pathname === '/profile' ? `text text_type_main-medium ${styles.navigation__button} ${styles.navigation__button_active}`
                                    : `text text_type_main-medium ${styles.navigation__button}`}>Профиль</NavLink>
                        </li>
                        <li className={styles.navigation__list_element}>
                            <NavLink to='/profile/orders' className={({ isActive }) =>
                                isActive ? `text text_type_main-medium ${styles.navigation__button} ${styles.navigation__button_active}`
                                    : `text text_type_main-medium ${styles.navigation__button}`}>История заказов</NavLink>
                        </li>
                        <li className={styles.navigation__list_element}>
                            <button onClick={handleLogout} className={`text text_type_main-medium ${styles.navigation__button}`} >Выход</button>
                        </li>
                    </ul>
                </nav>
                <p className={`mt-20 text text_type_main-default text_color_inactive ${styles.description}`}>В этом разделе вы можете
                    изменить свои персональные данные</p>
            </div>
            <Outlet />
        </main>
    )
}

export default ProfileOverlay