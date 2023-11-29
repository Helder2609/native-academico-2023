import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, Image, Button } from 'react-native-elements';

const MenuScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const [menuItems, setMenuItems] = useState([
    {
      id: '1',
      name: 'Pizza Margherita',
      price: 30.00,
      image: 'https://anamariabraga.globo.com/wp-content/uploads/2020/08/pizza-margherita-1024x576.jpg',
    },
    {
      id: '2',
      name: 'Macarrão Alfredo com Frango',
      price: 39.99,
      image: 'https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_1920,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg',
    },
    {
      id: '3',
      name: 'Arroz Biro Biro',
      price: 29.80,
      image: 'https://acdn.mitiendanube.com/stores/001/165/503/products/arrozbirobiro11-0acfac57de57d0f26c15940462496017-480-0.webp',
    },
    {
      id: '4',
      name: 'Pasta Carbonara',
      price: 29.80,
      image: 'https://www.thespruceeats.com/thmb/ovIQQQxQajADuIE2lqhgqq7ppyE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pasta-carbonara-recipe-5210168-hero-01-80090e56abc04ca19d88ebf7fad1d157.jpg',
    },
    {
      id: '5',
      name: 'Tacos',
      price: 29.80,
      image: 'https://mojo.generalmills.com/api/public/content/GmHhoT5mr0Sue2oMxdyEig_gmi_hi_res_jpeg.jpeg?v=fdaa7c14&t=466b54bb264e48b199fc8e83ef1136b4',
    },
    {
      id: '6',
      name: 'Salada',
      price: 29.80,
      image: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad.jpg',
    },
    {
      id: '7',
      name: 'Sopa',
      price: 29.80,
      image: 'https://images.immediate.co.uk/production/volatile/sites/2/2016/08/25097.jpg?quality=90&crop=2px,151px,596px,542px&resize=556,505',
    },
  ]);

  const renderItem = ({ item }) => (
    <Card>
      <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>{item.name}</Text>
      <Text style={{ fontSize: 14, color: 'gray' }}>{item.category}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>R${item.price.toFixed(2)}</Text>
      <Button title="Adicionar ao Carrinho" onPress={() => addToCart(item)} containerStyle={{ marginTop: 10 }} />
    </Card>
  );

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log(`${item.name} Adicionado ao Carrinho`);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MenuScreen;