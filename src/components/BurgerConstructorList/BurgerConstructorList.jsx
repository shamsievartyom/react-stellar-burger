import React, { useRef, useCallback } from 'react'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructorList.module.css'
import PropTypes from 'prop-types';
import { useDrag, useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CARD_TO_CONSTRUCTOR, CHANGE_INGREDIENT_POSITION } from '../../redux/actions/BurgerConstructor'
import BurgerItem from '../BurgerItem/BurgerItem';
import { DECREASE_COUNT_OF_INGREDIENT, INCREASE_COUNT_OF_INGREDIENT } from '../../redux/actions/BurgerIngredients';

function BurgerConstructorList() {

    const cards = useSelector(store => store.BurgerConstructor)
    const data = cards.ingredients;
    const bun = cards.bun;

    const dispatcher = useDispatch();

    const [{ isDragging, canDrop }, dropRef] = useDrop({//dnd ingredient to constructor
        accept: "ingredient",
        drop(card) {
            dispatcher({
                type: ADD_CARD_TO_CONSTRUCTOR,
                payload: { ...card, listId: uuidv4() }
            })
            if (card.type === "bun" && cards.bun !== null) {
                dispatcher({
                    type: DECREASE_COUNT_OF_INGREDIENT,
                    id: cards.bun._id,
                })
            }
            dispatcher({
                type: INCREASE_COUNT_OF_INGREDIENT,
                id: card._id,
            })
        },
        collect: (monitor) => ({
            isDragging: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })
    });

    const moveCard = useCallback((dragIndex, hoverIndex) => {//dnd inside container
        dispatcher({
            type: CHANGE_INGREDIENT_POSITION,
            dragIndex,
            hoverIndex,
        })
    }, [])

    return (
        <div className={`${styles.main__container} ${canDrop ? styles.onDrag : ''} ${isDragging ? styles.isDragging : ''}`} ref={dropRef}>
            {bun ? (
                <ConstructorElement
                    extraClass={`mr-4 ${styles.ingredient__top}`}
                    isLocked={true}
                    type='top'
                    text={bun.name + " (верх)"}
                    thumbnail={bun.image}
                    price={bun.price}
                />
            ) : (
                <div className={`mb-4 ${styles.undefined__ingredient}`} />
            )}
            <ul className={styles.list}>
                {data?.map((card, i) => {
                    return <BurgerItem card={card} index={i} key={card.listId} moveCard={moveCard} />
                })}
            </ul>
            {bun ? (
                <ConstructorElement
                    extraClass={`mr-4 ${styles.ingredient__bottom}`}
                    isLocked="true"
                    type='bottom'
                    text={bun.name + " (низ)"}
                    thumbnail={bun.image}
                    price={bun.price}
                />
            ) : (
                <div className={`mt-4 ${styles.undefined__ingredient}`} />
            )}
        </div>
    )
}

export default BurgerConstructorList