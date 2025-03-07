import React, { useEffect } from 'react'
import OrderList from '../../components/OrderList/OrderList'
import OrderStats from '../../components/OrderStats/OrderStats'
import styles from './OrderFeed.module.css'
import { WS_CLOSE, WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../../redux/actions/WebSocket'
import { useDispatch } from '../../hooks/useDispatch'

const OrderFeed = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START, payload: 'orders/all' })
        return () => { dispatch({ type: WS_CLOSE, payload: undefined }) }
    }, [dispatch])

    return (
        <main className={styles.main}>
            <OrderList />
            <OrderStats />
        </main>
    )
}

export default OrderFeed