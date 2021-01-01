import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Image, Button } from 'react-native';

const Song = (props) => {
  //const[getter, setter] = useState(initialValue);
  const[isPlayed, setIsPlayed] = useState(true);

  return (
    <View>
      <Text>
        This is a song {props.title}, and it's {isPlayed ? "being played" : "waiting on a playlist"}!
      </Text>
      <Button
      //onPress is a prop
        onPress={() => {
          setIsPlayed(false);
        }}
        disabled={!isPlayed}
        title={isPlayed ? "Play that song!" : "Mmm good vibes!"}
      />
    </View>
  )
}

export default Song;