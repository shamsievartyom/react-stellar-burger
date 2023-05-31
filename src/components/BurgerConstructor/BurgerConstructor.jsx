import { useEffect, useState } from 'react'
import BurgerConstructorList from '../BurgerConstructorList/BurgerConstructorList'
import { Button, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructor.module.css'
import OrderDetails from '../OrderDetails/OrderDetails'
import { useModal } from '../../hooks/useModal'
import Modal from '../Modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import funFetch from '../../functions/funFetch'
import { ADD_DATA_TO_ORDER_DETAILS } from '../../actions/OrderDetails'

function BurgerConstructor() {

    const { isModalOpen, openModal, closeModal } = useModal();

    const constructorIngredients = useSelector(store => store.BurgerConstructor)
    const dispatch = useDispatch()

    function totalPrice() {
        let price = 0;
        if (constructorIngredients.ingredients.length !== 0) {
            price += constructorIngredients.ingredients.reduce((old, current) => {
                return old + current.price;
            }, 0);
        }
        if (constructorIngredients.bun) price += constructorIngredients.bun.price * 2
        return price
    }

    function handleOrderButton() {
        openModal();
        funFetch('orders', 'POST', { ingredients: [constructorIngredients.bun._id, ...constructorIngredients.ingredients.map((el)=> el._id)] })
            .then((data) => {
                dispatch({
                    type: ADD_DATA_TO_ORDER_DETAILS,
                    data: data,
                })
            })
            .catch((err) => console.log(err))
    }

    return (
        <section className={`mt-25 ${styles.section}`}>
            <BurgerConstructorList />
            <div className={`mt-10 ${styles.footer}`}>
                <span className="text text_type_digits-medium">{totalPrice()}</span>
                <CurrencyIcon style='width: 50px; height: 50px' width="60" />
                <Button extraClass='ml-4 mr-4' type='primary' htmlType='button' data={constructorIngredients} onClick={handleOrderButton}>Оформить заказ</Button>
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