import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import logo from '../../../assets/logo.png';
import {carregaTopo} from '../../../servicos/carregaDados';

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    },
  };
  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({topo: retorno});
    console.log(retorno);
  }
  componentDidMount() {
    this.atualizaTopo();
  }
  render() {
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Topo;
