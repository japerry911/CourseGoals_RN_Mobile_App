import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, { id: Math.random().toString(), goal: enteredGoal }]);
  };

  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.headerViewStyle}>
        <TextInput 
          style={styles.headerInputStyle}
          placeholder='Course Goal'
          onChangeText={newGoal => setEnteredGoal(newGoal)}
          value={enteredGoal}
        />
        <Button 
          title='ADD' 
          onPress={addGoalHandler}
        />
      </View>
      <FlatList
        data={courseGoals}
        keyExtractor={goal => goal.id}
        renderItem={({ item }) => <View style={styles.listItemStyle}><Text>{item.goal}</Text></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainerStyle: {
    padding: 50
  },
  headerViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerInputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    marginRight: 10
  },
  listItemStyle: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
