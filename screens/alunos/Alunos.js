import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, Card, Divider, FAB, IconButton, Text } from 'react-native-paper'
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const Alunos = ({navigation}) => {
  const [alunos, setAlunos] = useState([])
  
  useFocusEffect(
    React.useCallback((a) => {
      AsyncStorage.getItem('alunos').then(resultado => {

        resultado = JSON.parse(resultado) || []

        console.log(resultado)
        setAlunos(resultado)
      })
    }, [])

    );
    function deletar() {
      // Chama a API para excluir o item
      // Ou remove o item da lista de itens
    }
    
  return (
    <>
        <ScrollView style={{ padding: 15 }}>
        

        {alunos.map((item, i) => (
          <Card key={i} mode='outlined' style={{ marginBottom: 5 }}>
            <Card.Content margintop={10}>
              <Text variant="titleLarge">{item.nome}</Text>
              <Text variant="bodyMedium">CPF: {item.cpf}</Text>
              <Text varianqt="bodyMedium">Matricula: {item.matricula}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton buttonColor='#9370DB' icon='pencil-outline' />
              <Button onPress={deletar}>Excluir</Button>

            </Card.Actions>
          </Card>
        ))}


      </ScrollView>
        <FAB
          icon="plus"
          style={{
            position: 'absolute', right: 5, bottom: 2,
          }}
          onPress={() => navigation.push('alunos-form')}
        />
    </>
  )
}

export default Alunos