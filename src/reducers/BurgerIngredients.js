import { UPDATE_CARDS } from "../actions/BurgerIngredients";

const reducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_CARDS:
            return action.payload
        default:
            return state;
    }
};

export default reducer