import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Image, Button } from 'react-native';
import styles from './styles';

const Counter = () => {
  // const [clicks, setClicks] = useState(0);
  const [click, setClicks] = useState(0);
  const [isGreen, setGreen] = useState(false);

  const incrementCounter = () => setClicks(click + 1);
  const toggleColor = () => setGreen(!isGreen);

  return (
    <View>
      <Text>You clicked: {click}  </Text>
      <Button 
        title="Click me!"
        onPress={toggleColor}
        color = {isGreen ? 'green' : 'red'}
        
      />

    </View>
  )
  
}

export default Counter;