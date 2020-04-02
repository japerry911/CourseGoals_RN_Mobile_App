import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, Text } from 'react-native';

const GoalInput = ({ addGoalHandler, visible }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.headerViewStyle}>
                <Text>Enter a Course Goal:</Text>
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
        </Modal>
    );
};

const styles = StyleSheet.create({
    headerViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    headerInputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        marginRight: 10,
        marginBottom: 10
    }
});

export default GoalInput;