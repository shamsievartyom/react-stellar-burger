import { useEffect, FC } from "react";
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
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
import ProfileOverlay from "../ProfileOverlay/ProfileOverlay";
import OrderHistory from "../../pages/OrderHistory/OrderHistory";
import OrderFeedItem from "../../pages/OrderFeedItem/OrderFeedItem";
import { useDispatch } from "../../hooks/useDispatch";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useModal } from "../../hooks/useModal";
import { useSelector } from "../../hooks/useSelector";
import { UPDATE_INGREDIENT_DETAILS_DATA } from "../../redux/actions/IngredientDetails";
import OrderFeedDetails from "../OrderFeedDetails/OrderFeedDetails";
import { UPDATE_ORDER_FEED_DETAILS_DATA } from "../../redux/actions/OrderFeedDetails";

const App: FC = () => {

  const dispatch = useDispatch()

  const location = useLocation();
  const background = location.state && location.state.background;

  const ingredients = useSelector(store => store.BurgerIngredients)
  const orders = useSelector(store => store.wsReducer.messages?.orders)

  useEffect(() => {
    dispatch(getIngredientsThunk());
  }, [dispatch]);

  useEffect(() => {//ingredientDetails
    if (location.pathname.includes('/ingredients/') && ingredients.length > 0) {
      dispatch({
        type: UPDATE_INGREDIENT_DETAILS_DATA,
        data: ingredients.find((el) => el._id === location.pathname.split('/')[location.pathname.split('/').length - 1]),
      })
    }
  }, [location.pathname, ingredients.length]);

  useEffect(() => {//OrderFeedDetails
    if ((location.pathname.includes('/profile/orders/') || location.pathname.includes('/feed/')) && orders) {
      dispatch({
        type: UPDATE_ORDER_FEED_DETAILS_DATA,
        payload: orders.find((el) => el.number.toString() === location.pathname.split('/')[location.pathname.split('/').length - 1])
      })
    }
  }, [location.pathname, orders]);

  const navigate = useNavigate()

  const closeModal = () => {
    navigate(-1)
  }

  return (
    <>
      <Routes location={background || location}>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/ingredients/:id' element={<Ingredients />} />
          <Route path='/login' element={<OnlyUnAuth component={<Login />} />} />
          <Route path='/register' element={<OnlyUnAuth component={<Register />} />} />
          <Route path='/forgot-password' element={<OnlyUnAuth component={<ForgotPassword />} />} />
          <Route path='/reset-password' element={<OnlyUnAuth component={<ResetPassword />} />} />
          <Route path='/profile' element={<OnlyAuth component={<ProfileOverlay />} />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/orders' element={<OrderHistory />} />
          </Route>
          <Route path='/profile/orders/:id' element={<OrderFeedItem />} />
          <Route path='/feed' element={<OrderFeed />} />
          <Route path='/feed/:id' element={<OrderFeedItem />} />
          <Route path='*' element={<WrongRoute />} />
        </Route >
      </Routes >
      {
        background && (
          <Routes>
            <Route
              path="/ingredients/:id"
              element={
                <Modal closeModal={closeModal}>
                  <IngredientDetails />
                </Modal>
              }
            />
            <Route
              path="/profile/orders/:id"
              element={
                <Modal closeModal={closeModal}>
                  <OrderFeedDetails />
                </Modal>
              }
            />
            <Route
              path="/feed/:id"
              element={
                <Modal closeModal={closeModal}>
                  <OrderFeedDetails />
                </Modal>
              }
            />
          </Routes>
        )
      }
    </>
  );

}

export default App;
