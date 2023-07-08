import doFetch from "../../functions/doFetch";
import { ADD_DATA_TO_ORDER_DETAILS, TOrderDetails } from "../actions/OrderDetails";
import { TBurgerConstructor } from "../reducers/BurgerConstructor";
import { AppDispatch, AppThunk } from "../types"
import { fetchWithRefresh } from "./auth";

export const sendOrderThunk: AppThunk = (constructorIngredients: TBurgerConstructor, openModal: Function) => async (dispatch: AppDispatch) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("accessToken")
        },
        body: JSON.stringify({ ingredients: [constructorIngredients.bun?._id, ...constructorIngredients.ingredients.map((el) => el._id)] })
    }

    fetchWithRefresh('https://norma.nomoreparties.space/api/orders', options)
        .then((data) => {
            dispatch({
                type: ADD_DATA_TO_ORDER_DETAILS,
                data: data,
            })
            openModal();
        })
        .catch((err) => console.log(err))
}