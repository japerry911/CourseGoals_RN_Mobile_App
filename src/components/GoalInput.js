import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, Text } from 'react-native';

const GoalInput = ({ addGoalHandler, visible, onCancel }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const addHandler = () => {
        addGoalHandler(enteredGoal);
        setEnteredGoal('');
    };

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
                    onPress={addHandler}
                />
                <Button
                    title='CANCEL'
                    color='red'
                    onPress={() => onCancel()}
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