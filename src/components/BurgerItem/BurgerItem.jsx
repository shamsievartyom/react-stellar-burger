import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd';
import styles from './BurgerItem.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { DELETE_CARD_FROM_CONSTRUCTOR } from '../../actions/BurgerConstructor';

function BurgerItem({ card, index, moveCard }) {

    const dispatch = useDispatch()

    const handleClose = function () {
        dispatch({
            type: DELETE_CARD_FROM_CONSTRUCTOR,
            id: card.listId
        })
    }

    const id = card.listId;
    const ref = useRef(null)

    const [{ handlerId }, drop] = useDrop({
        accept: "constructor",
        collect(monitor) {
            return {
                handlerIdhandlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex)
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    })
    const [{ isDragging }, dragref] = useDrag({
        type: "constructor",
        item: () => {
            return { id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0 : 1
    dragref(drop(ref))

    return (
        <li ref={ref} data-handler-id={handlerId} className={styles.ingredient__container}>
            <DragIcon type="primary" />
            <ConstructorElement handleClose={handleClose} extraClass='mr-4' key={card.listId} text={card.name} thumbnail={card.image} price={card.price} />
        </li>)
}

export default BurgerItem