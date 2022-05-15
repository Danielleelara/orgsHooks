import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';
import useProdutores from '../../../hooks/useProdutores';
//import {carregaProdutores} from '../../../servicos/carregaDados';
import Card from './Produtor';

export default function Produtores({topo: Topo}) {
  const [titulo, lista] = useProdutores();

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };
  return (
    <FlatList
      data={lista}
      renderItem={({item}) => <Card {...item} />}
      ListHeaderComponent={TopoLista}
      keyExtractor={({nome}) => nome}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    color: '#464646',
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
  },
});
