import React, { FC } from 'react'
import { Torder } from '../../redux/reducers/WebSocket'
import { useSelector } from '../../hooks/useSelector'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import { TIngredient } from '../../redux/types'
import styles from './OrderFeedDetails.module.css'

const OrderFeedDetails: FC = () => {

  const order = useSelector(store => store.OrderFeedDetails)

  const ingredients = useSelector(store => store.BurgerIngredients)

  function countDuplicateStrings(strings: string[]): { string: string, count: number }[] {//id counter
    const counts: { [key: string]: number } = {};

    // Подсчитываем количество повторений каждой строки
    for (const str of strings) {
      if (counts[str]) {
        counts[str]++;
      } else {
        counts[str] = 1;
      }
    }

    // Создаем массив объектов с полями "string" и "count"
    const result = [];
    for (const str in counts) {
      const count = counts[str];
      result.push({ string: str, count: count });
    }

    return result;
  }

  let ingredientsWithCount: Array<{ string: string, count: number }> = []

  if (order?.ingredients) {
    ingredientsWithCount = countDuplicateStrings(order?.ingredients)
  }

  let totalPrice = 0

  return (
    <div className={styles.global_container}>
      <span className={`mt-15 text text_type_digits-default ${styles.flex_start_modifier}`}>{`#${order?.number.toString().padStart(6, '0')}`}</span>
      <h2 className={`mt-10 text text_type_main-medium ${styles.flex_start_modifier}`}>{order?.name}</h2>
      <p className={`mt-3 text text_type_main-small ${styles.flex_start_modifier}`}>{order?.status}</p>
      <h3 className={`mt-15 text text_type_main-medium ${styles.flex_start_modifier}`}>Состав:</h3>
      <ul className={styles.list}>
        {ingredientsWithCount.map((el, index) => {
          const obj = ingredients.find(item => item._id === el.string)
          if (obj?.price) totalPrice += (el.count * obj?.price)
          return (
            <li className={styles.list_item} key={index}>
              <div className={styles.list_item_helper}>
                <img className={styles.ingredient_image} src={obj?.image_mobile} />
                <h4 className={`text text_type_main-default`}>{obj?.name}</h4>
              </div>
              <div className={styles.price_container}>
                <span className='text text_type_digits-default'>{`${el.count} x ${obj?.price}`}</span>
                <CurrencyIcon type="primary" />
              </div>
            </li>
          )
        })}
      </ul>
      <div className={`mb-10 ${styles.bottom_container}`}>
        {order?.updatedAt && <FormattedDate className='text text_type_main-default text_color_inactive' date={new Date(order?.updatedAt)} />}
        <div className={styles.price_container}>
          <span className='text text_type_digits-default'>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  )
}

export default OrderFeedDetails