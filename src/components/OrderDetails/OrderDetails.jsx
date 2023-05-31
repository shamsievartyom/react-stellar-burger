import React, { useState } from 'react'
import styles from './OrderDetails.module.css'
import picture from './../../images/done.png'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function OrderDetails({ totalPrice }) {

    const order = useSelector(state => state.OrderDetails)

    OrderDetails.propTypes = {
        totalPrice: PropTypes.number,
    };

    return (
        <>
            <span className={`mt-30 text text_type_digits-large ${styles.price}`}>{totalPrice}</span>
            <p className='mt-8 text text_type_main-medium'>{`Идентификатор заказа: ${order?.order.number}`}</p>
            <img className='mt-15' src={picture} alt='Ок' />
            <p className='mt-15 text text_type_main-default'>Ваш заказ начали готовить</p>
            <p className='mt-2 mb-30 text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
        </>
    )
}

export default OrderDetails