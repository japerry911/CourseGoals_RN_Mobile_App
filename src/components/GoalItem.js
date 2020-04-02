import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const GoalItem = ({ goal }) => {
    return (
        <View style={styles.listItemStyle}>
            <Text>{goal}</Text>
        </View>
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