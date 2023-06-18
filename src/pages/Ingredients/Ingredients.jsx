import React, { useEffect } from 'react'
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_INGREDIENT_DETAILS_DATA } from '../../redux/actions/IngredientDetails';
import styles from './Ingredients.module.css'

function Ingredients() {

  const dispatch = useDispatch()

  const { id } = useParams();

  const cards = useSelector(state => state.BurgerIngredients)
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