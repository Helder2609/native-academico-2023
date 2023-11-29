import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'


const AlunosForm = ({navigation}) => {

    const [dados, setDados] = useState({})

    async function handleChange(valor, campo) {

        let endereco = {}
        if (campo == 'cep' && valor.length == 8) {
            endereco = await getEndereco(valor)
            console.log(endereco);
            setDados({ ...dados, ...endereco, [campo]: valor })
        } else {
            setDados({ ...dados, [campo]: valor })
        }
    }

    async function getEndereco(cep) {
        const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return endereco.data
    }

    function salvar() {
        AsyncStorage.getItem('alunos').then(resultado => {
      
            const alunos = JSON.parse(resultado) || []
            
            alunos.push(dados)
            console.log(alunos)
        
            AsyncStorage.setItem('alunos', JSON.stringify(alunos))
        
            navigation.goBack()
          })
      
    }

    return (
        <ScrollView style={{ margin: 15 }}>
<<<<<<< HEAD
=======
            <Text>Formulário do aluno</Text>
>>>>>>> 47df9e2e80c63bb44ba3a0374b1e418717a5fd22

            <Formik
                initialValues={curso}
                validationSchema={cursoValidator}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
                    <View>

{/* <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='CPF'
              value={values.cpf}
              onChangeText={(value)=>{setFieldValue('cpf', mask(value, '999.999.999-99') )}}
            />
            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='CEP'
              value={values.cpf}
              onChangeText={(value)=>{setFieldValue('cpf', mask(value, '999.999.999-99') )}}
            />
            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Data'
              value={values.cpf}
              onChangeText={(value)=>{setFieldValue('cpf', mask(value, '999.999.999-99') )}}
            />
            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Telefone'
              value={values.cpf}
              onChangeText={(value)=>{setFieldValue('cpf', mask(value, '999.999.999-99') )}}
            /> */}



                        <TextInput
                            style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Nome'
                            value={dados.nome}
                            onChangeText={(valor) => handleChange(valor, 'nome')}
                        />

                        <TextInput
                            style={{ marginTop: 10 }}
                            mode='outlined'
                            label='CPF'
                            keyboardType='decimal-pad'
                            value={dados.cpf}
                            onChangeText={(valor) => handleChange(valor, 'cpf')}
                        />

                        <TextInput
                            style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Matrícula'
                            value={dados.matricula}
                            onChangeText={(valor) => handleChange(valor, 'matricula')}
                        />

                        <TextInput
                            style={{ marginTop: 10 }}
                            mode='outlined'
                            label='E-mail'
                            keyboardType='email-address'
                            value={dados.email}
                            onChangeText={(valor) => handleChange(valor, 'email')}
                        />

                        <TextInput
                            style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Telefone'
                            keyboardType='number-pad'
                            value={dados.telefone}
                            onChangeText={(valor) => handleChange(valor, 'telefone')}
                        />

                        <TextInput
                            style={{ marginTop: 10 }}
                            mode='outlined'
                            label='CEP'
                            value={dados.cep}
                            keyboardType='number-pad'
                            onChangeText={(valor) => handleChange(valor, 'cep')}
                        />

                        <TextInput
                            style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Logradouro'
                            value={dados.logradouro}
                            onChangeText={(valor) => handleChange(valor, 'logradouro')}
                        />

                        <TextInput
                            style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Complemento'
                            value={dados.complemento}
                            onChangeText={(valor) => handleChange(valor, 'complemento')}
                        />

                        <TextInput
                            style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Número'
                            value={dados.numero}
                            onChangeText={(valor) => handleChange(valor, 'numero')}
                        />

                        <TextInput
                            style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Bairro'
                            value={dados.bairro}
                            onChangeText={(valor) => handleChange(valor, 'bairro')}
                        />

                        <Button onPress={handleSubmit}>Salvar</Button>
                    </View>
                )}

            </Formik>
        </ScrollView>
    )
}

export default AlunosForm