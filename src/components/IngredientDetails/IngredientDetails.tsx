import React, { FC } from 'react'
import styles from './IngredientDetails.module.css'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { TIngredient } from '../../redux/types';

const IngredientDetails: FC = () => {

    const card = useSelector((state: any) => state.IngredientDetails as TIngredient)
    const { name, image_large, calories, proteins, fat, carbohydrates } = card

    return (
        <>
            <h2 className='mt-10 mr-10 ml-10 text text_type_main-large'>Детали ингредиента</h2>
            <img src={image_large} alt={name} />
            <p className='mt-4 text text_type_main-medium'>{name}</p>
            <ul className={`mt-8 mb-15 ${styles.info__container}`}>
                <li className={styles.info__article}>
                    <p className={`text text_type_main-default text_color_inactive ${styles.info__name}`}>Калории, ккал</p>
                    <span className='text text_type_digits-default text_color_inactive'>{calories}</span>
                </li>
                <li className={styles.info__article}>
                    <p className={`text text_type_main-default text_color_inactive ${styles.info__name}`}>Белки, г</p>
                    <span className='text text_type_digits-default text_color_inactive'>{proteins}</span>
                </li>
                <li className={styles.info__article}>
                    <p className={`text text_type_main-default text_color_inactive ${styles.info__name}`}>Жиры, г</p>
                    <span className='text text_type_digits-default text_color_inactive'>{fat}</span>
                </li>
                <li className={styles.info__article}>
                    <p className={`text text_type_main-default text_color_inactive ${styles.info__name}`}>Углеводы, г</p>
                    <span className='text text_type_digits-default text_color_inactive'>{carbohydrates}</span>
                </li>
            </ul>
        </>
    )
}

export default IngredientDetails