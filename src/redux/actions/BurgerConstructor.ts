import { TIngredient } from "../types";

export const ADD_CARD_TO_CONSTRUCTOR: "ADD_CARD_TO_CONSTRUCTOR" = "ADD_CARD_TO_CONSTRUCTOR";
export const DELETE_CARD_FROM_CONSTRUCTOR: "DELETE_CARD_FROM_CONSTRUCTOR" = "DELETE_CARD_FROM_CONSTRUCTOR";
export const CHANGE_INGREDIENT_POSITION: "CHANGE_INGREDIENT_POSITION" = "CHANGE_INGREDIENT_POSITION";

export interface IAddCardToConstructorAction {
    readonly type: typeof ADD_CARD_TO_CONSTRUCTOR;
    readonly payload: (TIngredient & { listId: string })
}

export interface IDeleteCardFromConstructorAction {
    readonly type: typeof DELETE_CARD_FROM_CONSTRUCTOR;
    readonly id: string
}

export interface IChangeIngredientPositionAction {
    readonly type: typeof CHANGE_INGREDIENT_POSITION;
    readonly dragIndex: number,
    readonly hoverIndex: number,
}

export type TBurgerConstructorActions = IAddCardToConstructorAction | IDeleteCardFromConstructorAction | IChangeIngredientPositionAction