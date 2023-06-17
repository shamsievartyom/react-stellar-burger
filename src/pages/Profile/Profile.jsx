import { EditIcon, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState } from 'react'
import styles from './Profile.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/thunks/auth'

function Profile() {

  const [nameInput, setNameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [emailInput, setEmailInput] = useState('')

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleNameInputChange = (e) => {
    setNameInput(e.target.value)
  }

  const handlePasswordInputChange = (e) => {
    setPasswordInput(e.target.value)
  }

  const handleEmailInputChange = (e) => {
    setEmailInput(e.target.value)
  }

  const handleLogout = () => {
    dispatch(logout())
      .then(() => navigate('/login'))//redirect to '/'  ???
  }

  return (
    <div className={styles.container}>
      <nav>
        <ul className={`mr-15 ${styles.navigation__container}`}>
          <li className={styles.navigation__list_element}>
            <NavLink to="/profile" className={({ isActive }) =>
              isActive ? `text text_type_main-medium ${styles.navigation__button} ${styles.navigation__button_active}`
                : `text text_type_main-medium ${styles.navigation__button}`}>Профиль</NavLink>
          </li>
          <li className={styles.navigation__list_element}>
            <NavLink to='/orders' className={({ isActive }) =>
              isActive ? `text text_type_main-medium ${styles.navigation__button} ${styles.navigation__button_active}`
                : `text text_type_main-medium ${styles.navigation__button}`}>Истроия заказов</NavLink>
          </li>
          <li className={styles.navigation__list_element}>
            <NavLink onClick={handleLogout} className={`text text_type_main-medium ${styles.navigation__button}`} >Выход</NavLink>
          </li>
        </ul>
      </nav>
      <form className={styles.form}>

        <Input disabled={true} icon={"EditIcon"} value={nameInput} onChange={handleNameInputChange} placeholder='Имя'></Input>
        <EmailInput disabled={true} icon={"EditIcon"} value={emailInput} onChange={handleEmailInputChange} extraClass='mt-6' placeholder='Логин'></EmailInput>
        <PasswordInput disabled={true} icon={"EditIcon"} value={passwordInput} onChange={handlePasswordInputChange} extraClass='mt-6' placeholder='Пароль'></PasswordInput>
      </form>
    </div>
  )
}

export default Profile