import React, { FC, useState } from 'react'
import styles from './IngredientItem.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientDetails from '../IngredientDetails/IngredientDetails'
import PropTypes, { func, object } from 'prop-types';
import { useModal } from '../../hooks/useModal'
import Modal from '../Modal/Modal';
import { useDrag } from "react-dnd";
import { UPDATE_INGREDIENT_DETAILS_DATA } from '../../redux/actions/IngredientDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import { TIngredient } from '../../redux/types';
import { useDispatch } from '../../hooks/useDispatch';

type TIngredientItemProps = {
    card: TIngredient,
}

const IngredientItem: FC<TIngredientItemProps> = ({ card }) => {

    const { isModalOpen, openModal, closeModal } = useModal();
    const dispatch = useDispatch();

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
        dispatch({
            type: UPDATE_INGREDIENT_DETAILS_DATA,
            data: card,
        })
        navigate(`/ingredients/${card._id}`, { state: { background: location } })
        openModal()
    }

    return (
        <>
            <li className={isDragStart ? `${styles.container} ${styles.dragging}` : `${styles.container}`} ref={dragRef} onClick={handleOpenIngredientDetails}>
                <img src={card.image} alt={card.name} />
                {card.count !== 0 && <Counter count={card.count} size='default' />}
                <div className={`mt-1 mb-1 ${styles.counter}`}>
                    <span className='text text_type_digits-default mr-2'>{card.price}</span>
                    <CurrencyIcon type="primary" />
                </div>
                <h3 className={`text text_type_main-default ${styles.title}`}>{card.name}</h3>
            </li>
            {isModalOpen &&
                <Modal closeModal={closeModal}>
                    <IngredientDetails />
                </Modal>
            }
        </>
    )
}

export default IngredientItem