import { useEffect, useState } from 'react'
import BurgerConstructorList from '../BurgerConstructorList/BurgerConstructorList'
import { Button, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructor.module.css'
import { data } from '../../utils/data'
import ModalOrder from '../ModalOrder/ModalOrder'
import ModalPortal from '../ModalPortal/ModalPortal'

function BurgerConstructor() {

    const [burgerState, setBurgerState] = useState([])
    const [modalVisability, setModalVisability] = useState(false)
    useEffect(() => setBurgerState(data), [])

    function totalPrice() {
        return burgerState.reduce((old, current) => {
            return old + current.price;
        }, 0);
    }

    return (
        <section className={`mt-25 ${styles.section}`}>
            <BurgerConstructorList data={burgerState} />
            <div className={`mt-10 ${styles.footer}`}>
                <span className="text text_type_digits-medium">{totalPrice()}</span>
                <CurrencyIcon style='width: 50px; height: 50px' width="60" />
                <Button extraClass='ml-4 mr-4' type='primary' htmlType='button' onClick={() => setModalVisability(true)}>Оформить заказ</Button>
                {modalVisability &&
                    <ModalPortal setModalVisability={setModalVisability}  >
                        <ModalOrder totalPrice={totalPrice().toString().padStart(6, '0')} />
                    </ModalPortal>
                }
            </div>
        </section>
    )
}

export default BurgerConstructor