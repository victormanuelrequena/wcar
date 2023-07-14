import Provider from "../Provider";
import UserContextType from "./UserContextType";

export default interface UserProvider extends Provider<UserContextType> {
    
}

export const UserProviderName = "UserProvider";