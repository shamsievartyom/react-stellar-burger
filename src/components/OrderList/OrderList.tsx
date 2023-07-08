import React, { FC } from 'react'
import OrderItem from '../OrderItem/OrderItem'
import { useSelector } from '../../hooks/useSelector'
import { TWSState } from '../../redux/reducers/WebSocket'
import styles from './OrderList.module.css'

const OrderList: FC = () => {

    const wsReducer = useSelector(store => store.wsReducer)

    return (
        <section className={styles.section}>
            <h1 className='mt-10 pl-2 text text_type_main-large'>Лента заказов</h1>
            <ul className={`mt-5 ${styles.list}`}>
                {wsReducer.messages?.orders.map(el => {
                    return < OrderItem key={el._id} order={el} />
                })}
            </ul>
        </section>
    )
}

export default OrderList