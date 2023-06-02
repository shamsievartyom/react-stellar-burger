import doFetch from "../../functions/doFetch";
import { UPDATE_CARDS } from "../actions/BurgerIngredients";

export const getIngredientsThunk = () => async (dispatch) => {
    doFetch('ingredients', 'Get')
        .then((res) => {
            dispatch({
                type: UPDATE_CARDS,
                payload: res
            });
        })
        .catch((err) => console.log(err))
}