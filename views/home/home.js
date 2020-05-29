import React from 'react';
import estilo from './estilo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text} from "react-native";
import {formulario, login, materias} from './..';
import Icon from 'react-native-ionicons';

//Icon.loadFont()

const Tab = createBottomTabNavigator();

function homeScreen(){
    return(
    <View>
            {/* <Text style={[estilo.Texto]}> */}
            {/* Página Home */}
            {/* </Text> */}
            <Text >Example of Ion Icons</Text>
        {/*Icon name used on all platforms*/}
        <Text ><Icon name="add" /></Text>
        <Icon name="information-circle-outline" />
        {/*Different Icon for different platforms*/}
        <Text ><Icon ios="ios-add" android="md-add" /></Text>
        <Icon ios="ios-add" android="md-add" />
        {/*Different Icon for different platforms*/}
        <Text ><Icon ios="ios-album" android="md-add" /></Text>
        <Icon ios="ios-albums" android="md-add" />
    </View>
    )
}

function home() {
    return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={homeScreen} />
                <Tab.Screen name="Materias" component={materias} />
            </Tab.Navigator>
    )
}

export default home;