import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

const getFullName = (firstName, secondName) => {
  return firstName + ' ' + secondName;
}

const PresentationAndInput = (props) => {

  return (
    <View>
      <Text>{props.greeting} {getFullName('Groovy', 'Goose')}</Text>
      <TextInput style={styles.input}/>
    </View>
  ) 
}

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


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hallo Welt!</Text>
      <PresentationAndInput greeting="Hello"/>
      <PresentationAndInput greeting="Witaj"/>
      <Image 
        source={{url: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
       />
       <Song title="Celebration"/>
       <Song title="I want your love"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});


// no index.html
// CSS, style only in the file?
// why at Image double {{}} bo tak