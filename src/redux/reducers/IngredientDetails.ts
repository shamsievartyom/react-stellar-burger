import { IIngedientDetailsActions, UPDATE_INGREDIENT_DETAILS_DATA } from "../actions/IngredientDetails";
import { TIngredient } from "../types";

export const initialState = null

const reducer = (state: (null | TIngredient) = initialState, action: IIngedientDetailsActions) => {
    switch (action.type) {
        case UPDATE_INGREDIENT_DETAILS_DATA: {
            return action.data
        }
        default:
            return state;
    }
};

export default reducer