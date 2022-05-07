import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/telas/Home';
import Topo from './src/telas/Home/componentes/Topo';

export default function App() {
  return (
    <SafeAreaView>
      <Home />
      <Topo />
    </SafeAreaView>
  );
}
