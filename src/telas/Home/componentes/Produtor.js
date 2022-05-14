import React from 'react';
import {Text, View, Image} from 'react-native';

const Card = ({nome, imagem, distancia, estrelas}) => {
  return (
    <View>
      <Image source={imagem} accessibilityLabel={nome} />
      <Text>{nome}</Text>
      <Text>{distancia}</Text>
    </View>
  );
};

export default Card;
