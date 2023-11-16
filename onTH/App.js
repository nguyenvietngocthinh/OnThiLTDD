import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { Layout01 } from './screen/Layout01';
import { Layout02 } from './screen/Layout02';
import { Layout03 } from './screen/Layout03';
import { Layout04 } from './screen/Layout04';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Layout01" component={Layout01} options={{headerShown: false}}/>
        <Stack.Screen name="Layout02" component={Layout02} options={{headerShown: false}}/>
        <Stack.Screen name="Layout03" component={Layout03} options={{headerShown: false}}/>
        <Stack.Screen name="Layout04" component={Layout04} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

