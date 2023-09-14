import authReducers from "./auth.reducers";
import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import ProductReducer from './product.reducer';
import CategoryReducer from './category.reducer';
import OrderReducer from './order.reducer';
const rootReducer = combineReducers({
    auth: authReducers,
    user: userReducer,
    category: CategoryReducer,
    product: ProductReducer,
    order: OrderReducer
});

export default rootReducer;