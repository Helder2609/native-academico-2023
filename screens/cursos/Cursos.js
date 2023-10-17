import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, Card, Divider, FAB, IconButton, Text } from 'react-native-paper'
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const Cursos = ({ navigation }) => {

  const [cursos, setCursos] = useState([])

  useFocusEffect(
    React.useCallback((a) => {
      AsyncStorage.getItem('cursos').then(resultado => {

        resultado = JSON.parse(resultado) || []

        console.log(resultado)
        setCursos(resultado)
      })
    }, [])
  );

  return (
    <>
      <ScrollView style={{ padding: 15 }}>
        

        {cursos.map((item, i) => (
          <Card key={i} mode='outlined' style={{ marginBottom: 5 }}>
            <Card.Content margintop={10}>
              <Text variant="titleLarge">{item.nome}</Text>
              <Text variant="bodyMedium">Duração: {item.duracao + ' Semestres'}</Text>
              <Text varianqt="bodyMedium">Modalidade: {item.modalidade}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton buttonColor='#9370DB' icon='pencil-outline' />
              <IconButton icon='trash-can-outline' onClick={() => this.deletarItem(i)} />
            </Card.Actions>
          </Card>
        ))}


      </ScrollView>
        <FAB
          icon="plus"
          style={{
            position: 'absolute', right: 5, bottom: 2,
          }}
          onPress={() => navigation.push('cursos-form')}
        />
    </>
  )
}

export default Cursos