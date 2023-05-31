import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import IngredientItem from '../IngredientItem/IngredientItem'
import styles from './IngredientsList.module.css'
import PropTypes from 'prop-types';

function IngredientsList({ type }) {

  const cards = useSelector(store => store.BurgerIngredients)

  return (
    <ul className={`mt-6 mb-10 ml-4 mr-4 ${styles.list}`}>
      {cards?.map((card) => {
        return card.type === type && < IngredientItem key={card._id} card={card} />
      })}
    </ul>
  )
}

IngredientsList.propTypes = {
  type: PropTypes.string,
};

export default IngredientsList