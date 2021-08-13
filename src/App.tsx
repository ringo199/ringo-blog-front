import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store';
import Routes from './router';
import Layout from './layout'
import './App.css';

const App: FC = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  </Provider>
);

export default App;