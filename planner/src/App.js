import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createGlobalStyle } from 'styled-components';

import logo from './logo.svg';
import './App.css';
import Test from './components/Test';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  html {
    height: 100%;
  }
`;

const history = createBrowserHistory();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isRootUser, setIsRootUser] = useState(false);
  const [user, setUser] = useState('Jane Doe');
  const [currentUser, setCurrentUser] = useState({});

  const signOutHandler = () => {
    setCurrentUser({ currentUser: null });
    setUser(null);
    setIsRootUser(false);
  };

  const signInHandler = (currentUser) => {
    console.log('signInHandler', currentUser);
    setIsRootUser(currentUser.currentUser.root);
  };

  const authHandler = (bool = 0) => {
    if (bool === 0) {
      if (isSignedIn) {
        signOutHandler();
      } else {
        // BEM TO DO: set currentUser

        signInHandler(currentUser);
      }

      setIsSignedIn(!isSignedIn);
    } else {
      if (!bool) {
        signOutHandler();
      } else {
        // BEM TO DO: setCurrentUser
        signInHandler(currentUser);
      }

      setIsSignedIn(bool);
    }
  };

  return (
    <Router history={history}>
      <div>
        <GlobalStyle />
      </div>
    </Router>
  );
}

export default App;
