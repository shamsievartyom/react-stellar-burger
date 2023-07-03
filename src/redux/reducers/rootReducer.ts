import { combineReducers } from 'redux';
import BurgerIngredients from './BurgerIngredients';
import BurgerConstructor from './BurgerConstructor';
import OrderDetails from './OrderDetails'
import IngredientDetails from './IngredientDetails';
import user from './user';
import { wsReducer } from './WebSocket';

const rootReducer = combineReducers({
    BurgerIngredients: BurgerIngredients,
    BurgerConstructor: BurgerConstructor,
    OrderDetails: OrderDetails,
    IngredientDetails: IngredientDetails,
    user: user,
    wsReducer: wsReducer,
});

export default rootReducer;