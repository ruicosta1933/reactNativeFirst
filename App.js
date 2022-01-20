import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MeuComponente from './meuComponente';

export default function App() {
  return (
    <View style={styles.container}>
       <StatusBar style="light" />
      <Text style={styles.texto}>Primeira Aplicação</Text>
      <ScrollView>
      <MeuComponente></MeuComponente>
      <MeuComponente></MeuComponente>
      <MeuComponente></MeuComponente>
      <MeuComponente></MeuComponente>
      <MeuComponente></MeuComponente>
      <MeuComponente></MeuComponente>
      <MeuComponente></MeuComponente>
      <MeuComponente></MeuComponente>
      <MeuComponente></MeuComponente>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70,
  },
  texto: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 20,
  }
});
