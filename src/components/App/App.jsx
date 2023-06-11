
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
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

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredientsThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/ingredients/:id' element={<Ingredients />} />
        <Route path='*' element={<WrongRoute />} />
      </Route>
    </Routes>
  );

}

export default App;
