import './App.css';
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Home } from './components/Home/home';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';

function App() {
  const auth = useSelector(state => state.loginReducer.auth)
  return (
    <BrowserRouter>
      <Routes>
        {
          auth ? (
            <Route path="/" Component={Home}>
            </Route>
          ) :
            (
              < Route path="/" Component={Login}>
              </Route>
            )
        }
      </Routes>
    </BrowserRouter >
  );
}

export default App;
