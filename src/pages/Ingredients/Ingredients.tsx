import React, { useEffect, FC } from 'react'
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_INGREDIENT_DETAILS_DATA } from '../../redux/actions/IngredientDetails';
import styles from './Ingredients.module.css'
import { TIngredient } from '../../redux/types';

const Ingredients: FC = () => {

  const dispatch = useDispatch()

  const { id } = useParams();

  const cards = useSelector((state: any) => state.BurgerIngredients as TIngredient[])
  const card = cards.find((el) => el._id === id)
  if (card) {
    dispatch({
      type: UPDATE_INGREDIENT_DETAILS_DATA,
      data: card,
    })
  }

  return (
    <section className={styles.section}>
      {card && <IngredientDetails />}
    </section>
  )
}

export default Ingredients