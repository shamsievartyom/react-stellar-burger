import { Button, EditIcon, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useEffect, useState } from 'react'
import styles from './Profile.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/thunks/auth'
import { changeUserInfo } from '../../redux/thunks/Profile'

function Profile() {

  const [nameInput, setNameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [emailInput, setEmailInput] = useState('')

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const userData = useSelector((state) => state.user.user);

  useEffect(() => {
    setNameInput(userData.name)
    setEmailInput(userData.email)
  }, [])

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
      .then(() => navigate('/login'))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(changeUserInfo(nameInput, emailInput, passwordInput))
  }

  const handleDiscard = () => {
    setNameInput(userData.name)
    setEmailInput(userData.email)
    setPasswordInput('')
  }

  return (
    <div className={styles.container}>
      <div className={`mr-15 ${styles.left_menu__container}`}>
        <nav className={styles.nav}>
          <ul className={styles.navigation__container}>
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
        <p className={`mt-20 text text_type_main-default text_color_inactive ${styles.description}`}>В этом разделе вы можете
          изменить свои персональные данные</p>
      </div>
      <form className={styles.form}>
        <Input icon={"EditIcon"} value={nameInput} onChange={handleNameInputChange} placeholder='Имя'></Input>
        <EmailInput icon={"EditIcon"} value={emailInput} onChange={handleEmailInputChange} extraClass='mt-6' placeholder='Логин'></EmailInput>
        <PasswordInput icon={"EditIcon"} value={passwordInput} onChange={handlePasswordInputChange} extraClass='mt-6' placeholder='Пароль'></PasswordInput>
        <div className={`mt-6 ${styles.form__submit_container}`}>
          <Button onClick={handleDiscard} htmlType="button" type="secondary" size="medium">
            Отмена
          </Button>
          <Button onClick={handleSubmit} htmlType="submit" type="primary" size="medium" extraClass="ml-2">
            Сохранить
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Profile