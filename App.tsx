import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import SignInScreen from './src/screens/SignInScreen/SignInScreen';


function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
    </SafeAreaView>
  );
}

const styles =StyleSheet.create({
  root: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  }
});


export default App;
