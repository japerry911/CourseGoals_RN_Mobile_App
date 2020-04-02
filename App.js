import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = enteredGoal => {
    setCourseGoals([...courseGoals, { id: (Math.random() * 9999).toString(), goal: enteredGoal }]);
  };

  return (
    <View style={styles.mainContainerStyle}>
      <Text>Enter a Course Goal:</Text>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList
        data={courseGoals}
        keyExtractor={goal => goal.id}
        renderItem={({ item }) => <GoalItem goal={item.goal} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainerStyle: {
    padding: 50
  }
});
