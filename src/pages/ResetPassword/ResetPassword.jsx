import React, { useState } from 'react'
import styles from './ResetPassword.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import doFetch from '../../functions/doFetch'

function ResetPassword() {

  const [passwordInput, setPasswordInput] = useState('')
  const [codeInput, setCodeInput] = useState('')

  const handlePasswordInputChange = (e) => {
    setPasswordInput(e.target.value)
  }

  const handleCodeInputChange = (e) => {
    setCodeInput(e.target.value)
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    doFetch('password-reset/reset', 'POST', { "password": passwordInput, "token": codeInput })
      .then((data) => {
        // ????????????????
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