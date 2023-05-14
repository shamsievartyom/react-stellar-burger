import React from 'react'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructorList.module.css'
import PropTypes from 'prop-types';

function BurgerConstructorList({ data }) {

    BurgerConstructorList.propTypes = {
        data: PropTypes.array.isRequired,
    };

    return (
        <ul className={styles.list}>
            {data.map((card, i) => {
                if (i === 0) return (<ConstructorElement isLocked="true" type='top' extraClass='mr-4' key={card._id} text={card.name} thumbnail={card.image} price={card.price} />)
                else if (i === data.length - 1) return (<ConstructorElement isLocked="true" type='bottom' extraClass='mr-4' key={card._id} text={card.name} thumbnail={card.image} price={card.price} />)
                else return (
                    <div className={styles.ingredient__container}>
                        <DragIcon type="primary" />
                        <ConstructorElement extraClass='mr-4' key={card._id} text={card.name} thumbnail={card.image} price={card.price} />
                    </div>)
            })}
        </ul>
    )
}

export default BurgerConstructorList