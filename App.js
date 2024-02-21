import { StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import Button from './components/button/Button';
import ActionButton from './components/actionButtons/ResetButton';

export default function App() {

  const [counter, setCounter] = useState(0);

  function handleUp() {
    setCounter(c => c + 1)
  }

  function handleDown() {
    setCounter(c => (c > 0 ? c - 1 : 0));
  }

  function handleReset() {
    setCounter(0);
  }

  function handlePlus10() {
    setCounter(c => c + 10);
  }

  return (
    <View style={styles.container}>

      <View style={styles.subcontainer}>

        <Button label='-' action={handleDown} />

        <View style={styles.counterContainer}>
          <Text style={styles.counter} >{counter}</Text>
        </View>

        <Button label='+' action={handleUp} />
      </View>

      <View style={styles.subcontainerReset}>
        <ActionButton reset={handleReset} plus={handlePlus10} />
      </View>

    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center'
  },
  subcontainer: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  subcontainerReset: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  btn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1'
  },
  btnTxt: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold'
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  counter: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold'
  }
});


