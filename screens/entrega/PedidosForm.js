import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import cursoValidator from '../../validators/cursoValidator'
import { mask } from 'remask'
import { Picker } from '@react-native-picker/picker'
import Validacao from '../../components/Validacao'
import Pedidos from './Pedidos'




const PedidosForm = ({ navigation, route }) => {

    let pedido = {
        nome: '',
        duracao: '',
        modalidade: ''
    }

    const [selectedLanguage, setSelectedLanguage] = useState();

    const id = route.params?.id

    if (id >= 0) {
        pedido = route.params?.pedido
    }

    function salvar(dados) {

        AsyncStorage.getItem('pedidos').then(resultado => {

            const pedidos = JSON.parse(resultado) || []

            if (id >= 0) {
                pedidos.splice(id, 1, dados)
            } else {
                pedidos.push(dados)
            }

            AsyncStorage.setItem('pedidos', JSON.stringify(pedidos))

            navigation.goBack()
        })
    }

    return (
        <ScrollView style={{ margin: 15 }}>
            <Text>Formulário de pedido</Text>

            <Formik
                initialValues={pedido}
                validationSchema={cursoValidator}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
                    <View>
                        <TextInput
                            style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Nome'
                            value={values?.nome || ''}
                            onChangeText={handleChange('nome')}
                        />
                        <Validacao errors={errors.nome} touched={touched.nome} />

                        {/* ... outros campos do formulário */}

                        <Button onPress={handleSubmit}>Salvar</Button>
                    </View>
                )}
            </Formik>



        </ScrollView >
    )
}

export default PedidosForm