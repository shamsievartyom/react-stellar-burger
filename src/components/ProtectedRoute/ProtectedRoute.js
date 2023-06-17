import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { SET_AUTH_CHECK } from "../../redux/actions/user";
import { checkUserAuth } from "../../redux/thunks/auth";

const ProtectedRoute = ({ onlyUnAuth = false, component }) => {
    const isAuthChecked = useSelector((store) => store.user.isAuthChecked);
    const user = useSelector((store) => store.user.user);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: SET_AUTH_CHECK,
            payload: false
        });
        dispatch(checkUserAuth());
    }, [dispatch]);

    if (!isAuthChecked) {
        // Запрос еще выполняется
        return null; // или прелоадер
    }

    if (onlyUnAuth && user) {
        // Пользователь авторизован, но запрос предназначен только для неавторизованных пользователей
        // Нужно сделать редирект на главную страницу или на тот адрес, что записан в location.state.from
        const { from } = location.state || { from: { pathname: "/" } };
        return <Navigate to={from} />;
    }

    if (!onlyUnAuth && !user) {
        // Сервер не ответил
        return <Navigate to="/login" state={{ from: location }} />;
    }

    // !onlyUnAuth && user
    return component;
};

export const OnlyAuth = (props) => <ProtectedRoute onlyUnAuth={false} {...props} />;
export const OnlyUnAuth = (props) => <ProtectedRoute onlyUnAuth={true} {...props} />;
