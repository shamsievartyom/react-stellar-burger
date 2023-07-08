import { TIngredient } from "../types";

export const UPDATE_INGREDIENT_DETAILS_DATA: 'UPDATE_INGREDIENT_DETAILS_DATA' = 'UPDATE_INGREDIENT_DETAILS_DATA'

export interface IUpdateIngredientDetailsDataAction {
    readonly type: typeof UPDATE_INGREDIENT_DETAILS_DATA;
    readonly data: TIngredient
}

export type IIngedientDetailsActions = IUpdateIngredientDetailsDataAction