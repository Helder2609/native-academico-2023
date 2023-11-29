import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import cursoValidator from '../../validators/cursoValidator';
import { Picker } from '@react-native-picker/picker';
import Validacao from '../../components/Validacao';
import * as ImagePicker from 'expo-image-picker';

const CursosForm = ({ navigation, route }) => {
  let curso = {
    nome: '',
    duracao: '',
    modalidade: '',
  };

  const [selectedLanguage, setSelectedLanguage] = useState();
  const id = route.params?.id;

  if (id >= 0) {
    curso = route.params?.curso;
  }

  
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });
  
    console.log(result.uri);
  
    // Ajuste para usar 'canceled' em vez de 'cancelled'
    if (!result.canceled) {
      if (result.assets && result.assets.length > 0) {
        // Acesse a primeira imagem na matriz de ativos
        const selectedImage = result.assets[0];
        setImage(selectedImage.uri);
      }
    }
  };
  if (hasGalleryPermission === false) {
    return <Text>Sem acesso a galeria</Text>;
  }



  function salvar(dados) {
    AsyncStorage.getItem('cursos').then(resultado => {
      const cursos = JSON.parse(resultado) || [];

      if (id >= 0) {
        cursos.splice(id, 1, dados);
      } else {
        cursos.push(dados);
      }

      AsyncStorage.setItem('cursos', JSON.stringify(cursos));
      navigation.goBack();
    });
  }

  return (

    <ScrollView style={{ margin: 15 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
         <Button title='Escolher Imagem' onPress={pickImage} style={{ marginTop: 30 }} />
        {image && <Image source={{ uri: image }} style={{ flex: 1 / 2 }} />}
      </View>

        <Text>Formulário de Curso</Text>

      <Formik
        initialValues={curso}
        validationSchema={cursoValidator}
        onSubmit={values => salvar(values)}
      >
        {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
          <View>
            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Nome'
              value={values.nome}
              onChangeText={handleChange('nome')}
            />
            <Validacao errors={errors.nome} touched={touched.nome} />
<br/>
            <Picker
              selectedValue={values.categorias}
              onValueChange={handleChange('categorias')}>
              <Picker.Item label="Categorias" value="" />
              <Picker.Item label="Entradas ou Aperitivos" value="Entradas ou Aperitivos" />
              <Picker.Item label="Pratos Principais ou Principais" value="Pratos Principais ou Principais" />
              <Picker.Item label="Acompanhamentos" value="Acompanhamentos" />
              <Picker.Item label="Saladas" value="Saladas" />
              <Picker.Item label="Sopas e Cremes" value="Sopas e Cremes" />
              <Picker.Item label="Pizzas" value="Pizzas" />
              <Picker.Item label="Sobremesas" value="Sobremesas" />
            </Picker>
            <Validacao errors={errors.categorias} touched={touched.categorias} />

            {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
            <Button title="Escolher Imagem" onPress={() => pickImage()} />
            
            
            
            
            <Button onPress={handleSubmit}>Salvar</Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default CursosForm;
