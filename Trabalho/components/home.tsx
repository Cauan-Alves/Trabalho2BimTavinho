import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'; 
import mapa from '../assets/images/mapa.png';
import Sobre from './sobre';

export default function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    if (page === 'home') {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Localization</Text>
          <Image source={mapa} style={styles.image} /> 
          <Text style={styles.text}>Aperte no botão para saber a latitude e longitude de um lugar no mapa </Text>
          <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
            <Text style={styles.buttonText}>Localização</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (page === 'sobre') {
      return <Sobre />;
    }
  };

  return <View style={styles.container}>{renderPage()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#680000',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 32,
  },
});
