import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Image, Button } from 'react-native';
import styles from './styles';

const getFullName = (firstName, secondName) => {
  return firstName + ' ' + secondName;
}

const PresentationAndInput = (props) => {
  const [text, setText] = useState('');

  return (
    <View>
      <Text>{props.greeting} {getFullName('Groovy', 'Goose')}</Text>
      <TextInput 
      style={styles.input}
      placeholder="Type here to translate!"
      onChangeText={text => setText(text)}
      // https://scriptverse.academy/tutorials/reactjs-defaultvalue-value.html
      defaultValue={text}
      />
      <Text>
        {/* {text} */}
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
  ) 
}

export default PresentationAndInput;