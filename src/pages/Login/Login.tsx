import React, { useState, FC } from 'react'
import styles from './Login.module.css'
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/thunks/auth'

const Login: FC = () => {

  const [passwordInput, setPasswordInput] = useState('')
  const [emailInput, setEmailInput] = useState('')

  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value)
  }

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value)
  }

  const dispatch = useDispatch();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(emailInput, passwordInput));
  }

  return (
    <form onSubmit={handleOnSubmit} className={styles.form}>
      <h1 className='text text_type_main-medium'>Вход</h1>
      <EmailInput value={emailInput} onChange={handleEmailInputChange} extraClass='mt-6' placeholder='E-mail'></EmailInput>
      <PasswordInput value={passwordInput} onChange={handlePasswordInputChange} extraClass='mt-6' placeholder='Пароль'></PasswordInput>
      <Button htmlType='submit' extraClass='mt-6' type="primary" size="medium">Войти</Button>
      <p className='mt-20 text text_type_main-default text_color_inactive'>{`Вы — новый пользователь? `}
        <Link className='mt-20 text text_type_main-default' to="/register">Зарегистрироваться</Link>
      </p>
      <p className='mt-4 text text_type_main-default text_color_inactive'>{`Забыли пароль? `}
        <Link className='mt-20 text text_type_main-default' to="/forgot-password">Восстановить пароль</Link>
      </p>
    </form>
  )
}

export default Login