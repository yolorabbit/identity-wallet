import React, { createContext, useState, useEffect } from "react";
import { IUser, IInformation } from "../types/type";
import { fetchUser } from "../constants/functions";

const AppContext = createContext<any>({});

export const AppContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser>({ 
    email: '', 
    password: '', 
    did: '', 
    first_name: '', 
    last_name: '', 
    information: '{}', 
    phone_number: ''
  });
  const [refresh, setRefresh] = useState<boolean>(false);

  const [seedPhrase, setSeedPhrase] = useState<string[]>([]);
  const [idInfo, setIdInfo] = useState<IInformation>({} as IInformation);

  const UpdateUser = (user: IUser) => {
    setUser(user);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        seedPhrase,
        setSeedPhrase,
        UpdateUser,
        idInfo,
        setIdInfo,
        refresh,
        setRefresh
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

export default AppContext;

