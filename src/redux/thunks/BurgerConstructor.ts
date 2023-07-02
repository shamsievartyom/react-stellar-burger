import doFetch from "../../functions/doFetch";
import { ADD_DATA_TO_ORDER_DETAILS, TOrderDetails } from "../actions/OrderDetails";
import { TBurgerConstructor } from "../reducers/BurgerConstructor";
import { AppDispatch, AppThunk } from "../types"

export const sendOrderThunk: AppThunk = (constructorIngredients: TBurgerConstructor, openModal: Function) => async (dispatch: AppDispatch) => {
    doFetch<TOrderDetails>('orders', 'POST', { ingredients: [constructorIngredients.bun?._id, ...constructorIngredients.ingredients.map((el) => el._id)] })
        .then((data) => {
            dispatch({
                type: ADD_DATA_TO_ORDER_DETAILS,
                data: data,
            })
            openModal();
        })
        .catch((err) => console.log(err))
}