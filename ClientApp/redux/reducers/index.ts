import { combineReducers } from "redux";
import { facebookSignUpUserReducer } from "./facebookSignUpUserReducer";

const rootReducer = combineReducers({
    facebookSignUpUser: facebookSignUpUserReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;