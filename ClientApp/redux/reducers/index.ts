import { combineReducers } from "redux";
import { facebookSignUpUserReducer } from "./facebookSignUpUserReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    facebookSignUpUser: facebookSignUpUserReducer,
    user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;