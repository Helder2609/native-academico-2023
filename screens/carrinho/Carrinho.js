import React from 'react';
import { View, Text, FlatList } from 'react-native';

const Carrinho = ({ route }) => {
  const { cartItems } = route.params;

  const renderCartItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>R${item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Carrinho</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
      />
    </View>
  );
};

export default Carrinho;