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

const EnterDetailsScreen = ({ back }) => {
  
  const [ category, setCategory ] = useState(null)
  const [ payee, setPayee ] = useState(null)
  const [ memo, setMemo ] = useState(null)
  const [ date, setDate ] = useState(Date.now())

  return (
    <>
      <View style={styles.view}>
        <Picker 
          selectedValue={category}
          placeholder='How much did you spend?'
          onValueChange={v => setCategory(v)}
        >
          <Picker.Item label="Groceries" value="groceries" />
          <Picker.Item label="Utilities" value="utilities" />
        </Picker>

      <Button title='Back' onPress={() => back(1)}/>
      <Button title='Save' onPress={() => back(1)}/>

      </View>
    </>
  )

};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    flex: 1
  },
});

export default EnterDetailsScreen;
