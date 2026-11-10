import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles';

export default function Formacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formação</Text>

      <View style={styles.item}>
        <Text style={styles.label}>Ensino Superior (cursando)</Text>
        <Text style={styles.textos}>FATEC Baixada Santista</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Ensino Médio</Text>
        <Text style={styles.textos}>Concluído</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Cursos</Text>
        <Text style={styles.textos}>JavaScript, React Native, Git e GitHub</Text>
      </View>
    </View>
  );
}
