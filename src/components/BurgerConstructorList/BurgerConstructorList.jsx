import React, { useRef, useCallback } from 'react'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructorList.module.css'
import PropTypes from 'prop-types';
import { useDrag, useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CARD_TO_CONSTRUCTOR } from '../../actions/BurgerConstructor'
import BurgerItem from '../BurgerItem/BurgerItem';

function BurgerConstructorList() {

    const cards = useSelector(store => store.BurgerConstructor)

    let bun;

    const data = cards.filter((el) => {//filter bun from array
        if (el.type === 'bun') { bun = el; }
        return (el.type !== 'bun')
    })

    const dispatcher = useDispatch();

    const [{ isDragging }, dropRef] = useDrop({//dnd ingredient to constructor
        accept: "ingredient",
        drop(data) {
            dispatcher({
                type: ADD_CARD_TO_CONSTRUCTOR,
                payload: { ...data, listId: uuidv4() }
            })
        },
        collect: (monitor) => ({
            isDragging: monitor.isOver()
        })
    });

    const moveCard = useCallback((dragIndex, hoverIndex) => {//dnd inside container
        dispatcher({
            type: "CHANGE_INGREDIENT_POSITION",
            dragIndex,
            hoverIndex,
        })

        // setCards((prevCards) =>
        //     update(prevCards, {
        //         $splice: [
        //             [dragIndex, 1],
        //             [hoverIndex, 0, prevCards[dragIndex]],
        //         ],
        //     }),
        // )
    }, [])

    return (
        <div className={styles.main__container} ref={dropRef}>
            {bun ? (
                <ConstructorElement
                    extraClass={`mr-4 ${styles.ingredient__top}`}
                    isLocked={true}
                    type='top'
                    key={bun.listId}
                    text={bun.name + " (верх)"}
                    thumbnail={bun.image}
                    price={bun.price}
                />
            ) : (
                <div className={`mb-4 ${styles.undefined__ingredient}`} />
            )}
            <ul className={styles.list}>
                {data?.map((card, i) => {
                    return <BurgerItem card={card} index={i} moveCard={moveCard} />
                })}
            </ul>
            {bun ? (
                <ConstructorElement
                    extraClass={`mr-4 ${styles.ingredient__bottom}`}
                    isLocked="true"
                    type='bottom'
                    key={bun.lisId}
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