import React, { FC, useEffect } from 'react'
import styles from './OrderHistory.module.css'
import { useDispatch } from 'react-redux'
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../../redux/actions/WebSocket'
import OrderItem from '../../components/OrderItem/OrderItem'
import { useSelector } from '../../hooks/useSelector'

const OrderHistory: FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START, payload: 'orders' })
        return () => { dispatch({ type: WS_CONNECTION_CLOSED, payload: undefined }) }
    }, [dispatch])
   
    const orderList = useSelector(store => store.wsReducer.messages?.orders)

    return (
        <section className={styles.section}>
            <ul className={styles.list}>
                {orderList?.map((el, i) => < OrderItem key={i} order={el} />)}
            </ul>
        </section >
    )
}

export default OrderHistory