import { useRef, FC } from 'react'
import { useDrag, useDrop } from 'react-dnd';
import type { Identifier, XYCoord } from 'dnd-core'
import PropTypes from 'prop-types';
import styles from './BurgerItem.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DELETE_CARD_FROM_CONSTRUCTOR } from '../../redux/actions/BurgerConstructor';
import { DECREASE_COUNT_OF_INGREDIENT } from '../../redux/actions/BurgerIngredients';
import { TIngredient, TIngredientType } from '../../redux/types';
import { useDispatch } from '../../hooks/useDispatch';

type TBurgerItemProps = {
    card: (TIngredient & { listId: string }),
    index: number,
    moveCard: (dragIndex: number, hoverIndex: number) => void,
}

interface DragItem {
    index: number
    id: string
    type: string
  }

const BurgerItem: FC<TBurgerItemProps> = ({ card, index, moveCard }) => {

    const dispatch = useDispatch()

    const handleClose = function () {
        dispatch({
            type: DELETE_CARD_FROM_CONSTRUCTOR,
            id: card.listId
        })
        dispatch({
            type: DECREASE_COUNT_OF_INGREDIENT,
            id: card._id,
        })
    }

    const id = card.listId;
    const ref = useRef<HTMLLIElement>(null)

    const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: "constructor",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: DragItem, monitor) {
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
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

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
    dragref(drop(ref))

    return (
        <li ref={ref} data-handler-id={handlerId} className={styles.ingredient__container}>
            <DragIcon type="primary" />
            <ConstructorElement handleClose={handleClose} extraClass='mr-2' text={card.name} thumbnail={card.image} price={card.price} />
        </li>)
}

export default BurgerItem