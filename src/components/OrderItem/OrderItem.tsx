import React, { FC } from 'react'
import styles from './OrderItem.module.css'
import { Torder } from '../../redux/reducers/WebSocket'
import { useSelector } from '../../hooks/useSelector'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

type TOrderItemProps = {
  order: Torder
}

const OrderItem: FC<TOrderItemProps> = ({ order }) => {

  const ingredints = useSelector(store => store.BurgerIngredients)

  const orderSmallArray = order.ingredients.slice(0, 6);

  const calculatePrice = (): number => {
    let price = 0;
    order.ingredients?.map((arrayEl) => {
      return ingredints.filter(el => el._id === arrayEl).forEach((el) => price += el.price)
    })
    return price
  }

  return (
    <li className={styles.container}>
      <div className={styles.number_container}>
        <span className={'text text_type_digits-default'}>{'#' + order.number.toString().padStart(6, '0')}</span>
        <span className="text text_type_main-default text_color_inactive">{order.createdAt}</span>
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
  )
}

export default OrderItem