import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';

import { Picker } from '@react-native-community/picker';
import DatePicker from 'react-native-datepicker'

const EnterDetailsScreen = ({ back }) => {
  
  const [ category, setCategory ] = useState(null)
  const [ payee, setPayee ] = useState(null)
  const [ memo, setMemo ] = useState(null)
  const [ date, setDate ] = useState(Date.now())

  return (
    <>
      <View style={styles.view}>
        <Picker 
          style={styles.input}
          selectedValue={category}
          onValueChange={v => setCategory(v)}
        >
          <Picker.Item label="Groceries" value="groceries" />
          <Picker.Item label="Utilities" value="utilities" />
        </Picker>
        <Picker 
          style={styles.input}
          selectedValue={payee}
          onValueChange={v => setPayee(v)}
        >
          <Picker.Item label="Supermarket" value="supermarket" />
          <Picker.Item label="Cafe" value="cafe" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder='Enter memo'
          defaultValue={memo}
          onChangeText={t => setMemo(t)}
        />
        <DatePicker 
          style={styles.input}
          mode='date'
          onDateChange={d => setDate(d)}
        />
      <Button title='Back' onPress={() => back(1)}/>
      <Button title='Save' onPress={() => back(1)}/>

      </View>
    </>
  )

};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 30
  },
  input: {
    marginBottom: 20,
  }
});

export default EnterDetailsScreen;
