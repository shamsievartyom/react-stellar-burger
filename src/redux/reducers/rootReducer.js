import { combineReducers } from 'redux';
import BurgerIngredients from './BurgerIngredients';
import BurgerConstructor from './BurgerConstructor';
import OrderDetails from './OrderDetails'
import IngredientDetails from './IngredientDetails';

const rootReducer = combineReducers({
    BurgerIngredients: BurgerIngredients,
    BurgerConstructor: BurgerConstructor,
    OrderDetails: OrderDetails,
    IngredientDetails: IngredientDetails,
});

export default rootReducer;