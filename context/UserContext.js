import React from 'react';

// default values
export const MyUserContext = React.createContext({
  userName: 'miki',
  age: 38,
  setUserState: () => {},
});
