import React, { FC } from 'react'
import styles from './OrderStats.module.css'
import { useSelector } from '../../hooks/useSelector'

const OrderStats: FC = () => {

    const messages = useSelector(store => store.wsReducer.messages)

    const getStatusId = () => {
        const objOfArrayIds: { done: number[], inProgress: number[] } = { done: [], inProgress: [] }
        messages?.orders.map((el) => {
            if (el.status === 'done') objOfArrayIds.done.push(el.number)
            if (el.status === 'pending') objOfArrayIds.inProgress.push(el.number)
        })
        return objOfArrayIds
    }

    return (
        <section className={styles.section}>
            <article className={styles.top_numbers}>
                <div className={styles.oreder_list_container}>
                    <h2 className='text text_type_main-medium'>Готовы:</h2>
                    <ul className={styles.order_list}>
                        {getStatusId().done.slice(0, 10).map((el, i) => {
                            return <li key={i} className={`text text_type_digits-default ${styles.blue_numbers}`}>{el}</li>
                        })}
                    </ul>
                </div>
                <div className={styles.oreder_list_container}>
                    <h2 className='text text_type_main-medium'>В работе:</h2>
                    <ul className={styles.order_list}>
                        {getStatusId().inProgress.slice(0, 10).map((el, i) => {
                            return <li key={i} className='text text_type_digits-default'>{el}</li>
                        })}
                    </ul>
                </div>
            </article>
            <article className={styles.item}>
                <h2 className='text text_type_main-medium'>Выполнено за все время:</h2>
                <span className={`text text_type_digits-large ${styles.numbers}`}>{messages?.total}</span>
            </article>
            <article className={styles.item}>
                <h2 className='text text_type_main-medium'>Выполнено за сегодня:</h2>
                <span className={`text text_type_digits-large ${styles.numbers}`}>{messages?.totalToday}</span>
            </article>
        </section>
    )
}

export default OrderStats