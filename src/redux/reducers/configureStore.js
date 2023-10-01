import { legacy_createStore,applyMiddleware } from "redux";
import rootReducer from "./index"
import thunk from "redux-thunk"
export default function configureStore(){
    return legacy_createStore(rootReducer,applyMiddleware(thunk));
}