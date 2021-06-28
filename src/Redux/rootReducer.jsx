import productreducer from "./Products/productsreducer";
import Cartreducer from "./Cart/Cartreducer";
import { combineReducers } from "redux";
const rootreducer=combineReducers({
    productreducer,
    Cartreducer
})
export default rootreducer;
