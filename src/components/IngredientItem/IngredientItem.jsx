import React, { useState } from 'react'
import styles from './IngredientItem.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientDetails from '../IngredientDetails/IngredientDetails'
import PropTypes from 'prop-types';
import { useModal } from '../../hooks/useModal'
import Modal from '../Modal/Modal';

function IngredientItem({ card }) {

    IngredientItem.propTypes = {
        card: PropTypes.object,
    };

    const { isModalOpen, openModal, closeModal } = useModal();

    return (
        <>
            <li className={styles.container} onClick={() => openModal()}>
                <img src={card.image} />
                <Counter count="1" size='default' />
                <div className={`mt-1 mb-1 ${styles.counter}`}>
                    <span className='text text_type_digits-default mr-2'>{card.price}</span>
                    <CurrencyIcon type="primary" />
                </div>
                <h3 row="2" className={`text text_type_main-default ${styles.title}`}>{card.name}</h3>
            </li>
            {isModalOpen &&
                <Modal closeModal={closeModal}>
                    <IngredientDetails name={card.name} image={card.image_large} calories={card.calories} proteins={card.proteins} fat={card.fat} carbohydrates={card.carbohydrates} />
                </Modal>
            }
        </>
    )
}

export default IngredientItem