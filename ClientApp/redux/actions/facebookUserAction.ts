import { FacebookSignUpUser } from "@type/requestModels/FacebookSignUpUser"

export const ADD_FACEBOOK_USER = 'ADD_FACEBOOK_USER'
export const CANCEL_FACEBOOK_USER = 'CANCEL_FACEBOOK_USER'

export const addFacebookUser = (facebookSignUpUser: FacebookSignUpUser) => {
    return {
        type: ADD_FACEBOOK_USER,
        payload: facebookSignUpUser
    }
}

export const cancelFacebookUser = () => {
    return {
        type: CANCEL_FACEBOOK_USER,
        payload: null
    }
}
