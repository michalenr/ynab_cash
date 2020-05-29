import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';

const EnterValueScreen = ({ next }) => {

  const [ value, setValue ] = useState()

  return (
    <>
      <View style={styles.view}>
        <TextInput 
          style={styles.textInput}
          placeholder='How much did you spend?'
          onChangeText={v => setValue(v)}
          defaultValue={value}
          keyboardType='numeric'
        />

      <Button title='Next' onPress={() => next(2)}/>

      </View>
    </>
  )
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    flex: 1
  },
  textInput: {
    height: 200,
  }
});

export default EnterValueScreen;
