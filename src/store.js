import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { AppReducer } from "./main";

const initValue = {
    main: {},
}
const middlewares = [];
const storeEnhancers = compose(applyMiddleware(...middlewares));
const reducer = combineReducers({
    main: AppReducer,
});
export const store = createStore(reducer, initValue, storeEnhancers);