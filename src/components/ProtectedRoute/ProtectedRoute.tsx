import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, FC } from "react";
import { SET_AUTH_CHECK } from "../../redux/actions/user";
import { checkUserAuth } from "../../redux/thunks/auth";
import { TUserUser } from "../../redux/types";

type ProtectedRouteProps = {
    onlyUnAuth: boolean,
    component: any,
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ onlyUnAuth = false, component }) => {
    const isAuthChecked = useSelector((store: any) => store.user.isAuthChecked as boolean);
    const user = useSelector((store: any) => store.user.user as TUserUser);
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
        return <Navigate to="/login" state={{ from: location }} />
    };
    // !onlyUnAuth && user
    return component;
};

export const OnlyAuth = (props: any) => (<ProtectedRoute onlyUnAuth={false} {...props} />);
export const OnlyUnAuth = (props: any) => (<ProtectedRoute onlyUnAuth={true} {...props} />);

// export const OnlyAuth = (props: React.IntrinsicAttributes & React.ReactNode) => ProtectedRoute({ onlyUnAuth: false, component: props.component });

// export const OnlyUnAuth = (props: any) => <ProtectedRoute onlyUnAuth={ true} component = { ...props } />;
// export const OnlyUnAuth = (props: ProtectedRouteProps) => <ProtectedRoute onlyUnAuth={ true} { ...props } />;
