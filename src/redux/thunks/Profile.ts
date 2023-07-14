import doFetch from "../../functions/doFetch";
import { BASE_URL } from "../../utils/constants";
import { SET_USER } from "../actions/user";
import { AppDispatch, AppThunk } from "../types";
import { fetchWithRefresh } from "./auth";

export const changeUserInfo: AppThunk = (name: string, email: string, password: string) => {
    return (dispatch: AppDispatch) => {
        return fetchWithRefresh((BASE_URL + "/auth/user"), {
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