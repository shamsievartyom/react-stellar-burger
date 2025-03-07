import React, { FC } from 'react'
import styles from './IngredientItem.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrag } from "react-dnd";
import { useLocation, useNavigate } from 'react-router-dom';
import { TIngredient } from '../../redux/types';

type TIngredientItemProps = {
    card: TIngredient,
}

const IngredientItem: FC<TIngredientItemProps> = ({ card }) => {

    const navigate = useNavigate();

    const location = useLocation();

    const [{ isDragStart }, dragRef] = useDrag({//dnd
        type: "ingredient",
        item: card,
        collect: (monitor) => ({
            isDragStart: monitor.isDragging()
        })
    });

    function handleOpenIngredientDetails() {
        navigate(`/ingredients/${card._id}`, { state: { background: location } })
    }

    return (
        <li className={isDragStart ? `${styles.container} ${styles.dragging}` : `${styles.container}`} ref={dragRef} onClick={handleOpenIngredientDetails}>
            <img src={card.image} alt={card.name} />
            {card.count !== 0 && <Counter count={card.count} size='default' />}
            <div className={`mt-1 mb-1 ${styles.counter}`}>
                <span className='text text_type_digits-default mr-2'>{card.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <h3 className={`text text_type_main-default ${styles.title}`}>{card.name}</h3>
        </li>
    )
}

export default IngredientItem