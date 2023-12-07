import { ADD_FACEBOOK_USER, CANCEL_FACEBOOK_USER } from "@redux/actions/facebookUserAction"

import { FacebookSignUpUser } from "@type/requestModels/FacebookSignUpUser"

const initialState: FacebookSignUpUser = {
    avatar: "",
    email: "",
    name: ""
}

export const facebookSignUpUserReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_FACEBOOK_USER:
            return action.payload
        case CANCEL_FACEBOOK_USER:
            return state
        default:
            return state
    }
}