// screens/ScoreboardScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const ScoreboardScreen = ({ navigation }) => {
  const [teamA, setTeamA] = useState('Pakistan');
  const [teamB, setTeamB] = useState('England');
  const [scoreA, setScoreA] = useState(120);
  const [scoreB, setScoreB] = useState(90);

  const handleFinishMatch = () => {
    navigation.navigate('Summary', { teamA, teamB, scoreA, scoreB });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Team A"
        onChangeText={setTeamA}
      />
      <TextInput
        style={styles.input}
        placeholder="Team B"
        onChangeText={setTeamB}
      />
      <Text style={styles.score}>Score A: {scoreA}</Text>
      <Button title="Add 1 Run to Team A" onPress={() => setScoreA(scoreA + 1)} />
      <Text style={styles.score}>Score B: {scoreB}</Text>
      <Button title="Add 1 Run to Team B" onPress={() => setScoreB(scoreB + 1)} />
      <Button title="Finish Match" onPress={handleFinishMatch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  score: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default ScoreboardScreen;
