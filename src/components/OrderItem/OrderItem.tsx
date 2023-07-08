import React, { FC } from 'react'
import styles from './OrderItem.module.css'
import { Torder } from '../../redux/reducers/WebSocket'
import { useSelector } from '../../hooks/useSelector'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { useModal } from '../../hooks/useModal'
import { UPDATE_ORDER_FEED_DETAILS_DATA } from '../../redux/actions/OrderFeedDetails'
import Modal from '../Modal/Modal'
import OrderFeedDetails from '../OrderFeedDetails/OrderFeedDetails'

type TOrderItemProps = {
  order: Torder
}

const OrderItem: FC<TOrderItemProps> = ({ order }) => {

  const ingredints = useSelector(store => store.BurgerIngredients)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const location = useLocation()

  const { isModalOpen, openModal, closeModal } = useModal();

  const orderSmallArray = order.ingredients.slice(0, 6);

  const calculatePrice = (): number => {
    let price = 0;
    order.ingredients?.map((arrayEl) => {
      return ingredints.filter(el => el._id === arrayEl).forEach((el) => price += el.price)
    })
    return price
  }

  function handleOpenOrderFeedDetails() {
    dispatch({
      type: UPDATE_ORDER_FEED_DETAILS_DATA,
      payload: order,
    })
    navigate(`${location.pathname}/${order.number}`, { state: { background: location } })
    openModal()
  }

  return (
    <>
      <li className={styles.container} onClick={handleOpenOrderFeedDetails}>
        <div className={styles.number_container}>
          <span className={'text text_type_digits-default'}>{'#' + order.number.toString().padStart(6, '0')}</span>
          <FormattedDate className='text text_type_main-default text_color_inactive' date={new Date(order.createdAt)} />
        </div>
        <h2 className={`mt-6 text text_type_main-medium ${styles.title}`}>{order.name}</h2>
        <div className={`mt-6 ${styles.bottom_container}`}>
          <div className={styles.ingredients_container}>
            {orderSmallArray?.map((arrayEl, index) => {
              return (
                <div key={index} className={`${(order.ingredients.length > 6 && index === 0) ? `${styles.cover}` : `${styles.cover_z_index_modifier}`}`}>
                  {(order.ingredients.length > 6 && index === 0) &&
                    <span className={`text text_type_digits-default ${styles.cover_number}`}>{`+${order.ingredients.length - 5}`}</span>
                  }
                  <img className={`${styles.ingredient_image} ${(index > 4) ? `${styles.ingredient_image_modifier}` : ''}`} key={index} src={ingredints.find(el => el._id === arrayEl)?.image_mobile} />
                </div>
              )
            })}
          </div>
          <div className={styles.price_container}>
            <span className='text text_type_digits-default'>{calculatePrice()}</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </li >
      {
        isModalOpen &&
        <Modal closeModal={closeModal}>
          <OrderFeedDetails />
        </Modal>
      }
    </>
  )
}

export default OrderItem