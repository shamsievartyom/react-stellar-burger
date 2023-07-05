import React, { useEffect } from 'react'
import OrderList from '../../components/OrderList/OrderList'
import OrderStats from '../../components/OrderStats/OrderStats'
import styles from './OrderFeed.module.css'
import { useDispatch } from 'react-redux'
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../../redux/actions/WebSocket'

const OrderFeed = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START, payload: 'orders/all' })
        return () => { dispatch({ type: WS_CONNECTION_CLOSED, payload: undefined }) }
    }, [dispatch])

    return (
        <main className={styles.main}>
            <OrderList />
            <OrderStats />
        </main>
    )
}

export default OrderFeed