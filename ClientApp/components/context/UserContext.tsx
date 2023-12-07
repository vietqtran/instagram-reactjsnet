import React from "react"

interface UserContextProps {
   id: string
}

const UserContext = React.createContext<UserContextProps | null>(null)

export default UserContext
