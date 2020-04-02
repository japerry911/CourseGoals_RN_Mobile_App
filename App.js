import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.headerViewStyle}>
        <TextInput 
          style={styles.headerInputStyle}
          placeholder='Course Goal'
        />
        <Button title='ADD' />
      </View>
      <View>
      </View>
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
  }
});
