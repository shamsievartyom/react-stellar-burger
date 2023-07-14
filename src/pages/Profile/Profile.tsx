import { Button, EditIcon, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useEffect, useState, FC } from 'react'
import styles from './Profile.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from '../../hooks/useSelector'
import { logout } from '../../redux/thunks/auth'
import { changeUserInfo } from '../../redux/thunks/Profile'
import { useDispatch } from '../../hooks/useDispatch'

const Profile: FC = () => {

  const userData = useSelector((state) => state.user.user);

  const [nameInput, setNameInput] = useState(userData?.name || '')
  const [passwordInput, setPasswordInput] = useState('')
  const [emailInput, setEmailInput] = useState(userData?.email || '')

  const dispatch = useDispatch();

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }

  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value)
  }

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value)
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(changeUserInfo(nameInput, emailInput, passwordInput))
  }

  const handleDiscard = () => {
    setNameInput(userData?.name || '')
    setEmailInput(userData?.email || '')
    setPasswordInput('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input icon={"EditIcon"} value={nameInput} onChange={handleNameInputChange} placeholder='Имя'></Input>
      <EmailInput value={emailInput} onChange={handleEmailInputChange} extraClass='mt-6' placeholder='Логин'></EmailInput>
      <PasswordInput icon={"EditIcon"} value={passwordInput} onChange={handlePasswordInputChange} extraClass='mt-6' placeholder='Пароль'></PasswordInput>
      <div className={`mt-6 ${styles.form__submit_container}`}>
        <Button onClick={handleDiscard} htmlType="button" type="secondary" size="medium">
          Отмена
        </Button>
        <Button htmlType="submit" type="primary" size="medium" extraClass="ml-2">
          Сохранить
        </Button>
      </div>
    </form>
  )
}

export default Profile