import React, { FC } from 'react'
import styles from './IngredientDetails.module.css'
import { useSelector } from '../../hooks/useSelector'

const IngredientDetails: FC = () => {

    const card = useSelector((state) => state.IngredientDetails)
    return (
        <>
            <h2 className='mt-10 mr-10 ml-10 text text_type_main-large'>Детали ингредиента</h2>
            <img src={card?.image_large} alt={card?.name} />
            <p className='mt-4 text text_type_main-medium'>{card?.name}</p>
            <ul className={`mt-8 mb-15 ${styles.info__container}`}>
                <li className={styles.info__article}>
                    <p className={`text text_type_main-default text_color_inactive ${styles.info__name}`}>Калории, ккал</p>
                    <span className='text text_type_digits-default text_color_inactive'>{card?.calories}</span>
                </li>
                <li className={styles.info__article}>
                    <p className={`text text_type_main-default text_color_inactive ${styles.info__name}`}>Белки, г</p>
                    <span className='text text_type_digits-default text_color_inactive'>{card?.proteins}</span>
                </li>
                <li className={styles.info__article}>
                    <p className={`text text_type_main-default text_color_inactive ${styles.info__name}`}>Жиры, г</p>
                    <span className='text text_type_digits-default text_color_inactive'>{card?.fat}</span>
                </li>
                <li className={styles.info__article}>
                    <p className={`text text_type_main-default text_color_inactive ${styles.info__name}`}>Углеводы, г</p>
                    <span className='text text_type_digits-default text_color_inactive'>{card?.carbohydrates}</span>
                </li>
            </ul>
        </>
    )
}

export default IngredientDetails