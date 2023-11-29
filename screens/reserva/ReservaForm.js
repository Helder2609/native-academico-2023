import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import cursoValidator from '../../validators/cursoValidator';
import { MaskService } from 'react-native-masked-text';
import { Picker } from '@react-native-picker/picker';
import Validacao from '../../components/Validacao';
import DatePicker from 'react-native-datepicker';

const ReservaForm = ({ navigation, route }) => {
  let reserva = {
    nome: '',
    numero: '',
    duracao: '',
    modalidade: '',
    cpf: '',
    data: '',
    pessoas: '',
  };

  const id = route.params?.id;

  if (id >= 0) {
    reserva = route.params?.reserva;
  }

  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());


  function salvar(dados) {
    AsyncStorage.getItem('reserva').then((resultado) => {
      const reserva = JSON.parse(resultado) || [];

      if (id >= 0) {
        reserva.splice(id, 1, dados);
      } else {
        reserva.push(dados);
      }

      AsyncStorage.setItem('reserva', JSON.stringify(reserva));

      navigation.goBack();
    });
  }

  return (
    <ScrollView style={{ margin: 15 }}>
      <Text>Formulário de Curso</Text>

      <Formik
        initialValues={reserva}
        validationSchema={cursoValidator}
        onSubmit={(values) => salvar(values)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          setFieldValue,
        }) => (
          <View>
            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Nome'
              value={values.nome}
              onChangeText={handleChange('nome')}
            />
            <Validacao errors={errors.nome} touched={touched.nome} />

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Número'
              keyboardType='phone-pad'
              value={MaskService.toMask('cel-phone', values.numero, {
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) ',
              })}
              onChangeText={(text) => setFieldValue('numero', text)}
            />
            <Validacao errors={errors.numero} touched={touched.numero} />

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='CPF'
              placeholder="Type something"
              value={MaskService.toMask('cpf', values.cpf)}
              right={<TextInput.Affix />}
              onChangeText={(text) => setFieldValue('cpf', text)}
            />
            <Validacao errors={errors.cpf} touched={touched.cpf} />

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Data'
              value={MaskService.toMask('datetime', values.data, {
                format: 'DD/MM/YYYY',
              })}
              onChangeText={(text) => setFieldValue('data', text)}
            />
            <Validacao errors={errors.data} touched={touched.data} />

            <DatePicker
              value={date}
              onChange={(date) => setDate(date)}
              label="Data de Nascimento"
            />

            <Validacao errors={errors.data} touched={touched.data} />


            <br />
            <Picker
              selectedValue={values.pessoas}
              onValueChange={(itemValue) => setFieldValue('pessoas', itemValue)}>
              <Picker.Item label='Número de Pessoas' value='' />
              <Picker.Item label='1' value='1' />
              <Picker.Item label='2' value='2' />
              <Picker.Item label='3' value='3' />
              <Picker.Item label='4' value='4' />
              <Picker.Item label='5' value='5' />
              <Picker.Item label='6' value='6' />
              <Picker.Item label='7' value='7' />
              <Picker.Item label='8' value='8' />
              <Picker.Item label='9' value='9' />
              <Picker.Item label='10' value='10' />
            </Picker>
            <Validacao errors={errors.pessoas} touched={touched.pessoas} />

            <Button onPress={handleSubmit}>Salvar</Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default ReservaForm;
