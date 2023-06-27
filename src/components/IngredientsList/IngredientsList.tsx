import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import IngredientItem from '../IngredientItem/IngredientItem'
import styles from './IngredientsList.module.css'
import PropTypes from 'prop-types';
import { TIngredient, TIngredientType } from '../../redux/types';

type TIngredientsListProps = {
  type: TIngredientType,
}

const IngredientsList: FC<TIngredientsListProps> = ({ type }) => {

  const cards = useSelector((store: any) => store.BurgerIngredients as TIngredient[])

  return (
    <ul className={`mt-6 mb-10 ml-4 mr-4 ${styles.list}`}>
      {cards?.map((card) => {
        return card.type === type && < IngredientItem key={card._id} card={card} />
      })}
    </ul>
  )
}

export default IngredientsList