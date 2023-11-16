import instance from "./_axios_instance"

const END_POINT = {
    USER: 'user'
}

export const getAllUsers = () => {
    return instance.get(`/${END_POINT.USER}`)
}