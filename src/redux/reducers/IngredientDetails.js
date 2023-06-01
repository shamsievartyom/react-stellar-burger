import { UPDATE_INGREDIENT_DETAILS_DATA } from "../actions/IngredientDetails";

const reducer = (state = null, action) => {
    switch (action.type) {
        case UPDATE_INGREDIENT_DETAILS_DATA: {
            return action.data
        }
        default:
            return state;
    }
};

export default reducer