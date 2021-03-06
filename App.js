import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import Main from "./components/MainComponent.js";
import Loading from './components/LoadingComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const {persistor, store} = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Loading/>}
        persistor={persistor}
      >
        <Main />
      </PersistGate>
    </Provider>
  );
}


