import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Image, Button } from 'react-native';
import styles from './styles';

const Counter = () => {
  // const [clicks, setClicks] = useState(0);
  const [click, setClicks] = useState(0);
  
  const incrementCounter = () => setClicks(click + 1);

  return (
    <View>
      <Text>You clicked: {click}  </Text>
      <Button 
        title="Click me!"
        onPress={incrementCounter}
        
      />

    </View>
  )
  
}

export default Counter;