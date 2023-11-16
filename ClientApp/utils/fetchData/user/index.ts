import { getAllUsers } from "@utils/api/userApi"


export const fetchUsersData = async () => {
    return await getAllUsers()
}