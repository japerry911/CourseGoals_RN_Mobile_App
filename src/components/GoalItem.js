import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ goal, onDelete }) => {
    return (
        <TouchableOpacity onPress={onDelete}>
            <View style={styles.listItemStyle}>
                <Text>{goal}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItemStyle: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      }
});

export default GoalItem;