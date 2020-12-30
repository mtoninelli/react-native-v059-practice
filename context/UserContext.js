import React from 'react';

// default values
export const MyUserContext = React.createContext({
  userName: '',
  age: null,
  setUserState: () => {},
});
