import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../styles';

export default function Pessoal() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pessoal</Text>

      <Image
        style={styles.foto}
        source={{ uri: 'https://github.com/filipi15.png' }}
      />

      <View style={styles.item}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.textos}>Filipi Souza</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Curso:</Text>
        <Text style={styles.textos}>FATEC Baixada Santista</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>GitHub:</Text>
        <Text style={styles.textos}>github.com/filipi15</Text>
      </View>
    </View>
  );
}
