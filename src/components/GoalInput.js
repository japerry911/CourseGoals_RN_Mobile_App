import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Modal, Text } from 'react-native';

const GoalInput = ({ addGoalHandler, visible, onCancel }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const addHandler = () => {
        addGoalHandler(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.headerViewStyle}>
                <Text style={styles.headerTextStyle}>Enter a Course Goal:</Text>
                <TextInput 
                    style={styles.headerInputStyle}
                    placeholder='Course Goal'
                    onChangeText={newGoal => setEnteredGoal(newGoal)}
                    value={enteredGoal}
                />
                <View style={styles.buttonViewStyle}>
                    <TouchableOpacity
                        style={styles.buttonCancelStyle}
                        onPress={() => onCancel()}
                    >
                        <Text>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonAddStyle} 
                        onPress={addHandler}
                    >
                        <Text>ADD</Text>
                    </TouchableOpacity>
                </View>
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
        height: '5%',
        marginRight: 10,
        marginBottom: 10,
        padding: 10
    },
    buttonViewStyle: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between'
    },
    buttonAddStyle: {
        backgroundColor: 'lightgreen',
        padding: 20,
        borderRadius: 10,
        width: '30%',
        alignItems: 'center'
    },
    buttonCancelStyle: {
        backgroundColor: '#ff6666',
        padding: 20,
        borderRadius: 10,
        width: '30%'
    },
    headerTextStyle: {
        fontSize: 20,
        paddingBottom: 10
    }
});

export default GoalInput;