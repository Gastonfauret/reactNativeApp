import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>

      <StatusBar style="auto" />

      <View style={{ height: 100, width: 393, backgroundColor: 'green', flex: 1 }} />

      <View style={styles.subcontainer} />    

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBFCFC',    
  },

  subcontainer: {
    height: 100,
    width: 393,
    backgroundColor: 'red',   
    flex: 1 
  }
});

// https://www.youtube.com/watch?v=oD5WpQJo9YY&list=PLUlw6638d2QZFbQfC3sB5mKWJUWr2HEkc
