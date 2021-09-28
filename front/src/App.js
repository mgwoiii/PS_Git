import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Container } from '@material-ui/core';
import AppRouter from './component/route/RouteComponent';
import configureStore from './store';
import { PersistGate } from 'redux-persist/integration/react';

const {store, persistor} = configureStore();

function App() {
  return (
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>

        <div>      
          <Container>
          <AppRouter />
          </Container>
          
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
