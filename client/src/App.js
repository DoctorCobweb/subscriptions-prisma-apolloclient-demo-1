import React from 'react';
import { useSubscription } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import logo from './logo.svg';
import './App.css';

const POSTS_SUBSCRIPTION = gql`
  subscription {
    posts {
      id
      title
      content
      createdAt
      updatedAt
      published
    }
  }
`;

function App() {
  const { data, loading, error } = useSubscription(POSTS_SUBSCRIPTION);
  console.log(`FROM SUBSCRIPTIONS: ${JSON.stringify(data)}`);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
