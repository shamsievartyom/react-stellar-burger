import React, { useState } from 'react'
import styles from './ForgotPassword.module.css'
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import doFetch from '../../functions/doFetch'

function ForgotPassword() {

  const [inputValue, setInputValue] = useState('')
  const onInputEmailChange = e => {
    setInputValue(e.target.value)
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    doFetch('password-reset', 'POST', { "email": inputValue })
      .then((data) => {
      })
      .catch((err) => console.log(err))
  }

  return (
    <form className={styles.form} onSubmit={handleSumbit}>
      <h1 className='text text_type_main-medium'>Восстановление пароля</h1>
      <EmailInput onChange={onInputEmailChange} value={inputValue} extraClass='mt-6' placeholder='Укажите e-mail'></EmailInput>
      <Button extraClass='mt-6' htmlType='submit' type="primary" size="medium">Восстановить</Button>
      <p className='mt-20 text text_type_main-default text_color_inactive'>{`Вспомнили пароль? `}
        <Link className='mt-20 text text_type_main-default' to="/login">Войти</Link>
      </p>
    </form>
  )
}

export default ForgotPassword