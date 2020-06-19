import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CountryScreen from './screens/CountryScreen';
import ContinentScreen from './screens/ContinentScreen';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Continent" component={ContinentScreen} />
                <Stack.Screen name="Country" component={CountryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
  }
  
  export default App;