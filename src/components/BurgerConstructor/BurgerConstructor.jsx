import { useEffect, useState } from 'react'
import BurgerConstructorList from '../BurgerConstructorList/BurgerConstructorList'
import { Button, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructor.module.css'
import OrderDetails from '../OrderDetails/OrderDetails'
import { useModal } from '../../hooks/useModal'
import Modal from '../Modal/Modal'
import { useSelector } from 'react-redux'

function BurgerConstructor() {

    const { isModalOpen, openModal, closeModal } = useModal();

    const constructorIngredients = useSelector(store => store.BurgerConstructor)

    function totalPrice() {
        if (constructorIngredients) {
            return constructorIngredients.reduce((old, current) => {
                return old + current.price;
            }, 0);
        }
        else return 0
    }

    return (
        <section className={`mt-25 ${styles.section}`}>
            <BurgerConstructorList />
            <div className={`mt-10 ${styles.footer}`}>
                <span className="text text_type_digits-medium">{totalPrice()}</span>
                <CurrencyIcon style='width: 50px; height: 50px' width="60" />
                <Button extraClass='ml-4 mr-4' type='primary' htmlType='button' data={constructorIngredients} onClick={openModal}>Оформить заказ</Button>
                {isModalOpen &&
                    <Modal closeModal={closeModal}>
                        <OrderDetails totalPrice={totalPrice().toString().padStart(6, '0')} />
                    </Modal>
                }
            </div>
        </section>
    )
}

export default BurgerConstructor