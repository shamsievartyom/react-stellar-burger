import { useNavigate } from "react-router-dom";
import doFetch from "../../functions/doFetch";
import { SET_AUTH_CHECK, SET_USER } from "../actions/user";
import { AppDispatch, AppThunk } from "../types";

export const registerThunk: AppThunk = (name: string, email: string, password: string) => {
    return (dispatch: AppDispatch) => {
        return fetch("https://norma.nomoreparties.space/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
            .then(chekResponse)
            .then((res) => {
                if (res.success) {
                    localStorage.setItem("accessToken", res.accessToken);
                    localStorage.setItem("refreshToken", res.refreshToken);
                    dispatch({ type: SET_USER, payload: res.user });
                }
            })
            .catch((err) => console.log(err))
            .finally(() => dispatch({ type: SET_AUTH_CHECK, payload: true }));
    };
}

const chekResponse = (res: Response) => {
    if (res.ok) {
        return res.json();
    }
    return res.json().then((err) => Promise.reject(err));
};

const refreshToken = (): Promise<{ success: boolean, accessToken?: string, refreshToken?: string }> => {
    return fetch("https://norma.nomoreparties.space/api/auth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("accessToken") || '',
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken") || ''
        })
    }).then(chekResponse);
};

export const fetchWithRefresh = async (url: string, options: { method: string, headers: any, body?: string }) => {
    try {
        const res = await fetch(url, options);
        return await chekResponse(res);
    } catch (err) {
        if ((err as Error).message === "jwt expired") {
            const refreshData = await refreshToken();
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("accessToken", refreshData.accessToken || '');
            localStorage.setItem("refreshToken", refreshData.refreshToken || '');
            options.headers.Authorization = refreshData.accessToken;
            const res = await fetch(url, options);
            return await chekResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};

export const getUser: AppThunk = () => {
    return (dispatch: AppDispatch) => {
        return fetchWithRefresh("https://norma.nomoreparties.space/api/auth/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("accessToken")
            }
        })
            .then((res) => {
                dispatch({ type: SET_USER, payload: res.user });
            })
            .catch(() => {
                localStorage.removeItem("accessToken");
                dispatch({ type: SET_USER, payload: null });
            })
            .finally(() => dispatch({ type: SET_AUTH_CHECK, payload: true }));
    };
};

export const login: AppThunk = (email: string, password: string) => {
    return (dispatch: AppDispatch) => {
        return fetch("https://norma.nomoreparties.space/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(chekResponse)
            .then((res) => {
                if (res.success) {
                    localStorage.setItem("accessToken", res.accessToken);
                    localStorage.setItem("refreshToken", res.refreshToken);
                    dispatch({ type: SET_USER, payload: res.user });
                }
            })
            .catch((err) => console.log(err))
            .finally(() => dispatch({ type: SET_AUTH_CHECK, payload: true }));
    };
};

export const checkUserAuth: AppThunk = () => {
    return (dispatch) => {
        if (localStorage.getItem("accessToken")) {
            dispatch(getUser())
        } else {
            dispatch({ type: SET_AUTH_CHECK, payload: true });
            dispatch({ type: SET_USER, payload: null });
        }
    };
};

export const logout: AppThunk = () => {
    return (dispatch: AppDispatch) => {
        const token = localStorage.getItem("refreshToken")
        return fetch("https://norma.nomoreparties.space/api/auth/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: token
            })
        })
            .then(() => {
                dispatch({
                    type: SET_AUTH_CHECK,
                    payload: false,
                })
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("accessToken");
                window.location.href = '/login';
            })
            .catch((err) => {
                console.log(err);
            });
    };
};