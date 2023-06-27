import React, { useState, FC } from 'react'
import styles from './ForgotPassword.module.css'
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom'
import doFetch from '../../functions/doFetch'

const ForgotPassword: FC = () => {

  const [inputValue, setInputValue] = useState('')
  const onInputEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const navigate = useNavigate();

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    doFetch<{
      success: boolean,
      message: string,
    }>('password-reset', 'POST', { "email": inputValue })
      .then((data) => {
        if (data.success) navigate('/reset-password')
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