import doFetch from "../../functions/doFetch";
import { ADD_DATA_TO_ORDER_DETAILS } from "../actions/OrderDetails";

export const sendOrderThunk = (constructorIngredients, openModal) => async (dispatch) => {
    doFetch('orders', 'POST', { ingredients: [constructorIngredients.bun._id, ...constructorIngredients.ingredients.map((el) => el._id)] })
        .then((data) => {
            dispatch({
                type: ADD_DATA_TO_ORDER_DETAILS,
                data: data,
            })
            openModal();
        })
        .catch((err) => console.log(err))
}