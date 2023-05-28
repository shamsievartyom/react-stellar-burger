import { combineReducers } from 'redux';
import BurgerIngredients from './BurgerIngredients';
import BurgerConstructor from './BurgerConstructor';

const rootReducer = combineReducers({
    BurgerIngredients: BurgerIngredients,
    BurgerConstructor: BurgerConstructor,
});

export default rootReducer;