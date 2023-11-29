import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import { ScrollView, View } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, MD3DarkTheme, Portal, Text } from 'react-native-paper'
=======
import { Button, Card, Divider, FAB, IconButton, Text } from 'react-native-paper'
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native';
>>>>>>> 47df9e2e80c63bb44ba3a0374b1e418717a5fd22

const Cursos = ({ navigation }) => {

  const [cursos, setCursos] = useState([])
  const [idExcluir, setIdExcluir] = useState(0)

<<<<<<< HEAD
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useFocusEffect(
    React.useCallback(() => {
      carregarDados()
    }, [])
  );

  function carregarDados() {
    AsyncStorage.getItem('cursos').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setCursos(resultado)
    })
  }

  function confirmarExclusao(id) {
    setIdExcluir(id)
    setVisible(true)
  }

  function excluir() {
    cursos.splice(idExcluir, 1)
    AsyncStorage.setItem('cursos', JSON.stringify(cursos))
    carregarDados()
    setVisible(false)
  }

  return (
    <>

      <ScrollView style={{ padding: 15 }}>

        {cursos.map((item, i) => (
          <Card key={i} mode='outlined' style={{ marginBottom: 10 }}>
            <Card.Content>
              <Text variant="titleLarge">{item.nome}</Text>
              <Card.Content>
                <Text variant="bodyMedium">Categorias: {item?.categorias}</Text>
              </Card.Content>
            </Card.Content>
            <Card.Actions>
              <IconButton
                icon='pencil-outline'
                onPress={() => navigation.push('cursos-form', { id: i, curso: item })}
              />
              <IconButton
                icon='trash-can-outline'
                onPress={() => confirmarExclusao(i)}
              />
            </Card.Actions>
          </Card>
        ))}

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Content>
              <Text variant="bodyMedium">Deseja realmente excluir o registro?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={excluir}>Sim</Button>
              <Button onPress={hideDialog}>Não</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

      </ScrollView>

      <FAB
        icon="plus"
        size='small'
        style={{ position: 'absolute', right: 10, bottom: 10 }}
        onPress={() => navigation.push('cursos-form')}
      />
=======
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
>>>>>>> 47df9e2e80c63bb44ba3a0374b1e418717a5fd22


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