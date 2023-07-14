import UserEntity from "../../entities/UserEntity";

type UserContextType = {
  user: UserEntity | undefined;
  setUser: (user: UserEntity | undefined) => void;
};


export default UserContextType;