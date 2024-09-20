// screens/SummaryScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SummaryScreen = ({ route, navigation }) => {
  const { teamA, teamB, scoreA, scoreB } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Match Summary</Text>
      <Text>{teamA}: {scoreA}</Text>
      <Text>{teamB}: {scoreB}</Text>
      <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SummaryScreen;
