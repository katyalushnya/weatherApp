import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';
import React, {useState} from "react";
import Icons from "./components/icons";
import Gradient from "./components/Gradient";
import Loading from "./components/Loading";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClipBoardApp from "./components/ClipBoardApp";

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hi there! Details Screen</Text>
            <Button
                title="Go to Details... again))))"
                onPress={() => navigation.push('Details')}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back(((" onPress={() => navigation.goBack()} />
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (<NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>);
}

