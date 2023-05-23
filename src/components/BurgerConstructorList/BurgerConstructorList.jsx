import React from 'react'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructorList.module.css'
import PropTypes from 'prop-types';

function BurgerConstructorList({ data }) {

    BurgerConstructorList.propTypes = {
        data: PropTypes.array.isRequired,
    };

    return (
        <div className={styles.main__container}>
            <ConstructorElement extraClass={`mr-4 ${styles.ingredient__top}`} isLocked="true" type='top' key={data[0]?._id} text={data[0]?.name + " (верх)"} thumbnail={data[0]?.image} price={data[0]?.price} />
            <ul className={styles.list}>
                {data.map((card, i) => {
                    if (i !== 0 && i !== data.length - 1) {
                        return (
                            <div className={styles.ingredient__container}>
                                <DragIcon type="primary" />
                                <ConstructorElement extraClass='mr-4' key={card._id} text={card.name} thumbnail={card.image} price={card.price} />
                            </div>)
                    }
                })}
            </ul>
            <ConstructorElement extraClass={`mr-4 ${styles.ingredient__bottom}`} isLocked="true" type='bottom' key={data[0]?._id} text={data[0]?.name + " (низ)"} thumbnail={data[0]?.image} price={data[0]?.price} />
        </div>
    )
}

export default BurgerConstructorList