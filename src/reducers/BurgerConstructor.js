import { ADD_CARD_TO_CONSTRUCTOR } from "../actions/BurgerConstructor";

const reducer = (state = [], action) => {
    switch (action.type) {
        case "CHANGE_INGREDIENT_POSITION": {
            //console.log(JSON.stringify(state) + "start")
            state.splice(action.dragIndex, 1)
            state.splice(action.hoverIndex, 0, state[action.dragIndex]);
            //console.log(JSON.stringify(state) + "end")
            return (state)
        }
        case ADD_CARD_TO_CONSTRUCTOR: {
            if (action.payload.type === 'bun') {
                state = state.filter((el) => el.type !== 'bun')
                return [...state, action.payload]
            }
            else return [...state, action.payload]
        }
        default:
            return state;
    }
};

export default reducer