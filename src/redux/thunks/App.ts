import doFetch from "../../functions/doFetch";
import { UPDATE_CARDS } from "../actions/BurgerIngredients";
import { AppDispatch, AppThunk, TIngredient } from "../types";

export const getIngredientsThunk: AppThunk = () => async (dispatch: AppDispatch) => {
    doFetch<{
        data: TIngredient[],
        success: boolean,
    }>('ingredients', 'GET')
        .then((res) => {
            dispatch({
                type: UPDATE_CARDS,
                payload: res
            });
        })
        .catch((err) => console.log(err))
}