import doFetch from "../../functions/doFetch";
import { SET_USER } from "../actions/user";
import { fetchWithRefresh } from "./auth";

// export const sendOrderThunk = (name, email, password) => async (dispatch) => {
//     doFetch('auth/user ', 'POST', { name: name, email: email, password: password })
//         .then((data) => {
//             dispatch({
//                 type: ADD_DATA_TO_ORDER_DETAILS,
//                 data: data,
//             })
//             openModal();
//         })
//         .catch((err) => console.log(err))
// }

export const changeUserInfo = (name, email, password) => {
    return (dispatch) => {
        return fetchWithRefresh("https://norma.nomoreparties.space/api/auth/user", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("accessToken")
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            })
        })
            .then((res) => {
                dispatch({ type: SET_USER, payload: res.user });
            })
            .catch((err) => {
                console.log(err);
            });
    };
};