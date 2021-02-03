import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenStr = localStorage.getItem('token');
    const userToken = JSON.parse(tokenStr);
    if (!userToken) {
      return null;
    }
    return userToken.token;
  };

  const [token, setToken] = useState(getToken());
  
  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  };
}