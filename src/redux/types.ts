import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import store from './store/store'
import { TBurgerConstructorActions } from './actions/BurgerConstructor'
import { TBurgerIngredientsActions } from './actions/BurgerIngredients'
import { IIngedientDetailsActions } from './actions/IngredientDetails'
import { TOrderDetailsActions } from './actions/OrderDetails'
import { userActions } from './actions/user'

//      THUNK TYPES      //

export type RootState = ReturnType<typeof store.getState>;

// Типизация всех экшенов приложения
type TApplicationActions = TBurgerConstructorActions | TBurgerIngredientsActions | IIngedientDetailsActions | TOrderDetailsActions | userActions;

// Типизация thunk'ов в нашем приложении
export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = typeof store.dispatch; 

//      ADDITIONAL TYPES      //

export type TIngredientType = "bun" | "main" | "sauce"

export type TIngredient = {
    "_id": string,
    "name": string,
    "type": TIngredientType,
    "proteins": number,
    "fat": number,
    "carbohydrates": number,
    "calories": number,
    "price": number,
    "image": string,
    "image_mobile": string,
    "image_large": string,
    "__v": number,
    "count": number,
}