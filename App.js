import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Image, Button } from 'react-native';
import Song from './components/Song';
import PresentationAndInput from './components/PresentationAndInput';
import styles from './components/styles';


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


// no index.html
// CSS, style only in the file?
// why at Image double {{}} bo tak