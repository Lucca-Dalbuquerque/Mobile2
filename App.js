import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.login}>Login</Text>
      <View style={styles.emailInput}>
        <MaterialIcons name="email" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Digite seu email'
          onChangeText={setEmail}
        />
      </View>
      
      <View style={styles.senhaInput}>
        <FontAwesome5 name="key" size={20} color="black" />
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={setSenha}
          placeholder='Digite sua senha'
        />
      </View>

      <View style={styles.button}>
        <Button title='Login' onPress={() => Alert.alert('Você foi logado')} color='#fff' />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  senhaInput: {
    borderWidth: 2,
    borderColor: '#777',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: 350,
    flexDirection: 'row',
  },
  emailInput: {
    borderWidth: 2,
    borderColor: '#777',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: 350,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    padding: 4,
  },
  button: {
    width: 250,
    backgroundColor: '#90ee90',
    borderRadius: 10,
    marginTop: 10,
  },
  login: {
    fontSize: 50,
    color: 'green',
    marginBottom: 30,
  },
});