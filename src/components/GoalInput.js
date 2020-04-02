import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = ({ addGoalHandler }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    return (
    <View style={styles.headerViewStyle}>
        <TextInput 
          style={styles.headerInputStyle}
          placeholder='Course Goal'
          onChangeText={newGoal => setEnteredGoal(newGoal)}
          value={enteredGoal}
        />
        <Button 
          title='ADD' 
          onPress={() => addGoalHandler(enteredGoal)}
        />
    </View>
    );
};

const styles = StyleSheet.create({
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
    }
});

export default GoalInput;