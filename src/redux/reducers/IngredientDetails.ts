import { IIngedientDetailsActions, UPDATE_INGREDIENT_DETAILS_DATA } from "../actions/IngredientDetails";
import { TIngredient } from "../types";

const reducer = (state: (null | TIngredient) = null, action: IIngedientDetailsActions) => {
    switch (action.type) {
        case UPDATE_INGREDIENT_DETAILS_DATA: {
            return action.data
        }
        default:
            return state;
    }
};

export default reducer