import React from "react";
import UsersContextType from "./UserContextType";
import UserEntity from "../../entities/UserEntity";

const UserContext = React.createContext<UsersContextType>({
    user: undefined,
    setUser: (user: UserEntity | undefined) => {}
});

export default UserContext;