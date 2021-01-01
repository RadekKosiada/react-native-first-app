import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Image, Button } from 'react-native';
import Song from './components/Song';
import PresentationAndInput from './components/PresentationAndInput';
import Counter from './components/Counter';

import styles from './components/styles';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
    <Button

      title="Go to Dominik's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Dominik' })
      }
    />
     <Button
     color="black"
      style={styles.button}
      title="Go to Counter"
      onPress={() =>
        navigation.navigate('Counter')
      }
    />
     <Button
      title="Go to Song"
      onPress={() =>
        navigation.navigate('Song')
      }
    />
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />

        <Stack.Screen
          name="Counter"
          component = {Counter}
          options = {{ title: "Counter" }}
          />
           <Stack.Screen
          name="Profile" 
          component = {ProfileScreen}
        />
        <Stack.Screen
          name="Song" 
          component = {Song}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Hallo Welt!</Text>
        <PresentationAndInput greeting="Hello"/>
        <PresentationAndInput greeting="Witaj"/>
        <Counter />
        <Image 
          source={{url: "https://reactnative.dev/docs/assets/p_cat1.png"}}
          style={{width: 200, height: 200}}
        />
        <Song title="Celebration"/>
        <Song title="I want your love"/>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}*/

// no index.html
// CSS, style only in the file?
// why at Image double {{}} bo tak