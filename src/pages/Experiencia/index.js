import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles';

export default function Experiencia() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Experiência</Text>

      <View style={styles.item}>
        <Text style={styles.label}>Projetos acadêmicos</Text>
        <Text style={styles.textos}>Desenvolvimento de apps em React Native na disciplina de Desenvolvimento Mobile.</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Projetos pessoais</Text>
        <Text style={styles.textos}>Repositórios publicados no GitHub com os exercícios da faculdade.</Text>
      </View>
    </View>
  );
}
