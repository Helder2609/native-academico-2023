import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, MD3DarkTheme, Portal, Text } from 'react-native-paper'

const Reserva = ({ navigation }) => {

  const [reserva, setReserva] = useState([])
  const [idExcluir, setIdExcluir] = useState(0)

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useFocusEffect(
    React.useCallback(() => {
      carregarDados()
    }, [])
  );

  function carregarDados() {
    AsyncStorage.getItem('reserva').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setReserva(resultado)
    })
  }

  function confirmarExclusao(id) {
    setIdExcluir(id)
    setVisible(true)
  }

  function excluir() {
    reserva.splice(idExcluir, 1)
    AsyncStorage.setItem('reserva', JSON.stringify(reserva))
    carregarDados()
    setVisible(false)
  }

  return (
    <>

      <ScrollView style={{ padding: 15 }}>

        {reserva.map((item, i) => (
          <Card key={i} mode='outlined' style={{ marginBottom: 10 }}>
            <Card.Content>
              <Text variant="titleLarge">{item.nome}</Text>
              <Text variant="bodyMedium">Número: {item.numero} </Text>
              <Text variant="bodyMedium">CPF: {item.cpf}</Text>
              <Text variant="bodyMedium">Pessoas: {item.pessoas}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton 
                icon='pencil-outline' 
                onPress={() => navigation.push('reserva-form', {id: i, curso: item})}
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
        onPress={() => navigation.push('reserva-form')}
      />

    </>
  )
}

export default Reserva