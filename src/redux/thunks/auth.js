import doFetch from "../../functions/doFetch";
import { SET_AUTH_CHECK, SET_USER } from "../actions/user";

export const registerThunk = (name, email, password) => {
    return (dispatch) => {
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

const chekResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return res.json().then((err) => Promise.reject(err));
};

const refreshToken = () => {
    return fetch("https://norma.nomoreparties.space/api/auth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("accessToken")
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken")
        })
    }).then(chekResponse);
};

export const fetchWithRefresh = async (url, options) => {
    try {
        const res = await fetch(url, options);
        return await chekResponse(res);
    } catch (err) {
        if (err.message === "jwt expired") {
            const refreshData = await refreshToken();
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("accessToken", refreshData.accessToken);
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            options.Authorization = refreshData.accessToken;
            const res = await fetch(url, options);
            return await chekResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};

export const getUser = () => {
    return (dispatch) => {
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
            .catch((err) => {
                console.log(err);
            });
    };
};

export const login = (email, password) => {
    return (dispatch) => {
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

export const checkUserAuth = () => {
    return (dispatch) => {
        if (localStorage.getItem("accessToken")) {
            dispatch(getUser())
                .catch((error) => {
                    localStorage.removeItem("accessToken");
                    dispatch({ type: SET_USER, payload: null });
                })
                .finally(() => dispatch({ type: SET_AUTH_CHECK, payload: true }));
        } else {
            dispatch({ type: SET_AUTH_CHECK, payload: true });
            dispatch({ type: SET_USER, payload: null });
        }
    };
};

export const logout = () => {
    return (dispatch) => {
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
            })
            .catch((err) => {
                console.log(err);
            });
    };
};