import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';


import EnterValueScreen from './components/EnterValueScreen'
import EnterDetailsScreen from './components/EnterDetailsScreen'

const App: () => React$Node = () => {
  
  const [ value, setValue ] = useState()
  const [ onPage, setPage ] = useState(1)

  return (
    <>
      {onPage === 1 ?
        <EnterValueScreen next={setPage}/>
        : <EnterDetailsScreen back={setPage}/> 
      }
    </>
  );
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

export default App;
