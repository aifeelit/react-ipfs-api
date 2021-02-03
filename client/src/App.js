import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Login from './components/Login';
import useToken from './utils';

function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return (
    <div className="appTheme">
      <Login setToken={setToken} />
    </div>
    )
  }

  return (
    <div className="appTheme">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
