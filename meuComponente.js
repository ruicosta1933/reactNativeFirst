import react from "react";
import { StyleSheet, Text, View, Scroll } from 'react-native';

export default function MeuComponente(){
    return (
        <View style={styles.card}>
        <Text style={styles.cardTitle}>Rect Native</Text>
        <Text style={styles.subTitle}>Nova linguagem & ola mundo</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 15,
      marginVertical:5,
    },
    cardTitle: {
      fontSize: 13,
      fontWeight: 'bold',
    },
    subTitle: {
      color: '#999',
      fontSize: 14,
    }
  
  });
  