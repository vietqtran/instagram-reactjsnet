import { LOGIN, LOGOUT } from "@redux/actions/user";

import { LoginResponse } from "@type/LoginResponse";
import { User } from "@type/User";

const initialState: User = {
    id: "",
    accessToken: "",
    avatar: "",
    email: "",
    name: "",
    refreshToken: "",
    username: ""
}

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN:
            return action.payload
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}