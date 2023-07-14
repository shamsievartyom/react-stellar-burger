import React from 'react'
import styles from './OrderFeedItem.module.css'
import OrderFeedDetails from '../../components/OrderFeedDetails/OrderFeedDetails'
import { useSelector } from '../../hooks/useSelector'
import { useParams } from 'react-router-dom'
import { UPDATE_ORDER_FEED_DETAILS_DATA } from '../../redux/actions/OrderFeedDetails'
import { getOrderThunk } from '../../redux/thunks/OrderFeedItem'
import { useDispatch } from '../../hooks/useDispatch'

const OrderFeedItem = () => {

  const dispatch = useDispatch()

  const { id } = useParams()

  const orderList = useSelector(store => store.wsReducer.messages?.orders)

  const order = orderList?.find((el) => el.number.toString() === id)

  if (orderList) {
    dispatch({
      type: UPDATE_ORDER_FEED_DETAILS_DATA,
      payload: order,
    })
  }
  else {
    dispatch(getOrderThunk(id))
  }

  return (
    <section className={styles.section}>
      <OrderFeedDetails />
    </section>
  )
}

export default OrderFeedItem