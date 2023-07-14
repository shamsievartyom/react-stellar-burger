import React, { useEffect, FC } from 'react'
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails'
import { useParams } from 'react-router-dom';
import { useSelector } from '../../hooks/useSelector'
import { UPDATE_INGREDIENT_DETAILS_DATA } from '../../redux/actions/IngredientDetails';
import styles from './Ingredients.module.css'
import { useDispatch } from '../../hooks/useDispatch';

const Ingredients: FC = () => {

  const dispatch = useDispatch()

  const { id } = useParams();

  const cards = useSelector((state) => state.BurgerIngredients)
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