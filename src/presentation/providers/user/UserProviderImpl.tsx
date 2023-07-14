import React, { useContext, useState } from 'react';
import UserEntity, { UserEntityStatus } from '../../../domain/entities/UserEntity';
import ProviderProps from '../../../domain/providers/ProviderProps';
import UserContext from '../../../domain/providers/user/UserContext';
import UserProvider from '../../../domain/providers/user/UserProvider';
import { injectable } from 'inversify';
import UserContextType from '../../../domain/providers/user/UserContextType';

const _Actions:UserContextType =   {
  user: undefined,
  setUser: (user: UserEntity | undefined) => { },
}

const _Provider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<UserEntity | undefined>(undefined);
  _Actions.user = user;
  _Actions.setUser = setUser;
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

@injectable()
class UserProviderImpl implements UserProvider {
  public context = UserContext;

  public Provider = _Provider;

  Actions = _Actions
}

export default new UserProviderImpl();

