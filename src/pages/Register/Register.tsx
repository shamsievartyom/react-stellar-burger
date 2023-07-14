import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState, FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Register.module.css'
import doFetch from '../../functions/doFetch'
import { registerThunk } from '../../redux/thunks/auth'
import { useDispatch } from '../../hooks/useDispatch'

const Register: FC = () => {

  const [nameInput, setNameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [emailInput, setEmailInput] = useState('')


  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }

  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value)
  }

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value)
  }

  const dispatch = useDispatch();

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerThunk(nameInput, emailInput, passwordInput))
  }

  return (
    <form onSubmit={handleSumbit} className={styles.form}>
      <h1 className='text text_type_main-medium'>Регистрация</h1>
      <Input value={nameInput} onChange={handleNameInputChange} extraClass='mt-6' placeholder='Имя'></Input>
      <EmailInput value={emailInput} onChange={handleEmailInputChange} extraClass='mt-6' placeholder='E-mail'></EmailInput>
      <PasswordInput value={passwordInput} onChange={handlePasswordInputChange} extraClass='mt-6' placeholder='Пароль'></PasswordInput>
      <Button extraClass='mt-6' type="primary" htmlType='submit' size="medium">Зарегистрироваться</Button>
      <p className='mt-20 text text_type_main-default text_color_inactive'>{`Уже зарегистрированы? `}
        <Link className='mt-20 text text_type_main-default' to="/login">Войти</Link>
      </p>
    </form>
  )
}

export default Register