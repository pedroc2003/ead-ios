import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import estilo from './estilo';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {formulario, login, materias, home} from './views'

const Stack = createStackNavigator();

function App(){
  return(
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Formulario" component={formulario} />
        <Stack.Screen name="Home" component={home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;