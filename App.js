import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = enteredGoal => {
    setCourseGoals([...courseGoals, { id: (Math.random() * 9999).toString(), goal: enteredGoal }]);
    setIsAddMode(false);
  };

  const deleteGoalHandler = id => {
    setCourseGoals(courseGoals.filter(goal => goal.id !== id));
  };

  const cancelAddingGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.mainContainerStyle}>
      <Button 
        title='Add New Goal' 
        onPress={() => setIsAddMode(true)}
      />
      <GoalInput 
        visible={isAddMode}
        addGoalHandler={addGoalHandler} 
        onCancel={cancelAddingGoalHandler}
      />
      <FlatList
        data={courseGoals}
        keyExtractor={goal => goal.id}
        renderItem={({ item }) => {
        return (
          <GoalItem 
            goal={item.goal} 
            onDelete={() => deleteGoalHandler(item.id)} 
          />
        );}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainerStyle: {
    padding: 50
  }
});
