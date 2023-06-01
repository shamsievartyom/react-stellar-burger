import { DECREASE_COUNT_OF_INGREDIENT, INCREASE_COUNT_OF_INGREDIENT, UPDATE_CARDS } from "../actions/BurgerIngredients";

const reducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_CARDS: {
            return action.payload.data.map((el) => {
                el.count = 0
                return el
            })
        }
        case INCREASE_COUNT_OF_INGREDIENT: {
            return state.map((el) => {
                if (el._id === action.id) {
                    if (el.type === "bun") {//bun ingredient
                        if (el.count === 0) {
                            el.count = 2;
                        }
                    }
                    else el.count++//normal ingredient
                }
                return el
            })
        }
        case DECREASE_COUNT_OF_INGREDIENT: {
            return state.map((el) => {
                if (el._id === action.id) {
                    if (el.type === "bun") {//bun ingredient
                        if (el.count === 2) {
                            el.count = 0;
                        }
                    }
                    else el.count--//normal ingredient
                }
                return el
            })
        }
        default:
            return state;
    }
};

export default reducer