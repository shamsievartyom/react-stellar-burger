import { useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { getIngredientsThunk } from "../../redux/thunks/App";
import HomePage from "../../pages/HomePage/HomePage";
import Layout from "../../pages/Layout/Layout";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import Profile from "../../pages/Profile/Profile";
import Ingredients from "../../pages/Ingredients/Ingredients";
import WrongRoute from "../../pages/WrongRoute/WrongRoute";
import { OnlyAuth, OnlyUnAuth } from "../ProtectedRoute/ProtectedRoute";
import OrderFeed from "../../pages/OrderFeed/OrderFeed";

const App: FC = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredientsThunk());
  }, [dispatch]);

  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <Routes location={background || location}>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/ingredients/:id' element={<Ingredients />} />
        <Route path='/login' element={<OnlyUnAuth component={<Login />} />} />
        <Route path='/register' element={<OnlyUnAuth component={<Register />} />} />
        <Route path='/forgot-password' element={<OnlyUnAuth component={<ForgotPassword />} />} />
        <Route path='/reset-password' element={<OnlyUnAuth component={<ResetPassword />} />} />
        <Route path='/profile' element={<OnlyAuth component={<Profile />} />} />
        <Route path='/feed' element={<OrderFeed />} />
        <Route path='*' element={<WrongRoute />} />
      </Route >
    </Routes >
  );

}

export default App;
