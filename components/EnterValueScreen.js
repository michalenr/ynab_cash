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
        <View style={styles.textInputWrapper}>
          <TextInput 
            style={styles.textInput}
            placeholder='How much did you spend?'
            onChangeText={v => setValue(v)}
            defaultValue={value}
            keyboardType='numeric'
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button title='Next' onPress={() => next(2)}/>
        </View>

      </View>
    </>
  )
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 50
  },
  textInputWrapper: {
    flex: 2
  },
  textInput: {
    height: 100,
    fontSize: 30,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 50
  },
  buttonWrapper: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30
  },
});

export default EnterValueScreen;
