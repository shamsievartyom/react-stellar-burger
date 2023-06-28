import React, { useState, FC } from 'react'
import styles from './ResetPassword.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom'
import doFetch from '../../functions/doFetch'

const ResetPassword: FC = () => {

  const [passwordInput, setPasswordInput] = useState('')
  const [codeInput, setCodeInput] = useState('')

  const navigate = useNavigate();

  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value)
  }

  const handleCodeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeInput(e.target.value)
  }

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    doFetch<{
      success: boolean,
      message: string,
    }>('password-reset/reset', 'POST', { "password": passwordInput, "token": codeInput })
      .then((data) => {
        if (data.success) navigate('/login')
      })
      .catch((err) => console.log(err))
  }

  return (
    <form className={styles.form} onSubmit={handleSumbit}>
      <h1 className='text text_type_main-medium'>Восстановление пароля</h1>
      <PasswordInput onChange={handlePasswordInputChange} value={passwordInput} extraClass='mt-6' placeholder='Введите новый пароль'></PasswordInput>
      <Input onChange={handleCodeInputChange} value={codeInput} extraClass='mt-6' placeholder='Введите код из письма'></Input>
      <Button extraClass='mt-6' type="primary" htmlType='submit' size="medium">Сохранить</Button>
      <p className='mt-20 text text_type_main-default text_color_inactive'>{`Вспомнили пароль? `}
        <Link className='mt-20 text text_type_main-default' to="/login">Войти</Link>
      </p>
    </form>
  )
}

export default ResetPassword