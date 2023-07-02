import { FC, useCallback, useEffect, useState } from 'react'
import BurgerConstructorList from '../BurgerConstructorList/BurgerConstructorList'
import { Button, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructor.module.css'
import OrderDetails from '../OrderDetails/OrderDetails'
import { useModal } from '../../hooks/useModal'
import Modal from '../Modal/Modal'
import { useDispatch } from 'react-redux'
import { sendOrderThunk } from '../../redux/thunks/BurgerConstructor'
import { checkUserAuth } from '../../redux/thunks/auth'
import { useSelector } from '../../hooks/useSelector'

const BurgerConstructor: FC = () => {

    const { isModalOpen, openModal, closeModal } = useModal();

    const constructorIngredients = useSelector((store) => store.BurgerConstructor)
    const user = useSelector((store) => store.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkUserAuth())//check auth and disable order if not
    }, [constructorIngredients, dispatch])

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
        if (constructorIngredients.bun && user) {
            dispatch(sendOrderThunk(constructorIngredients, openModal));
        }
    }

    return (
        <section className={`mt-25 ${styles.section}`}>
            <BurgerConstructorList />
            <div className={`mt-10 ${styles.footer}`}>
                <span className="text text_type_digits-medium">{totalPrice()}</span>
                <CurrencyIcon type='primary' />
                <Button extraClass={(constructorIngredients.bun && user) ? 'ml-4 mr-4' : `ml-4 mr-4 ${styles.button_disabled}`} type='primary' htmlType='button' onClick={handleOrderButton}>Оформить заказ</Button>
                {isModalOpen &&
                    <Modal closeModal={closeModal}>
                        <OrderDetails />
                    </Modal>
                }
            </div>
        </section>
    )
}

export default BurgerConstructor