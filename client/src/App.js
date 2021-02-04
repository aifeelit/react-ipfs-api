import './App.css';
import React from 'react';
import Panel from './views/Panel';
import Login from './views/Login';
import useToken from './utils';

function App() {
  const { token, setToken } = useToken();
  
  return (
    <div className="appTheme">
    {token ? 
      (<Panel />) :
      (<Login setToken={setToken} />)
    }
    </div>
  );
}

export default App;
