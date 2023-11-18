import { LoginResponse } from "@type/LoginResponse"
import { User } from "@type/User"

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const loginRedux = (user: User) => {
    return {
        type: LOGIN,
        payload: user
    }
}

export const logoutRedux = () => {
    return {
        type: LOGOUT,
        payload: null
    }
}