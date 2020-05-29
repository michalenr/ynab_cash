import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';


const NumPad = ({ onPress }) => {

  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '>']

  return (
    <>
      {buttons.map(btn => <Button key={btn} title={btn} onPress={() => onPress(btn)} />)}
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
})
export default NumPad;
