import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading";
import * as Font from 'expo-font';
import React, {useState} from "react";
import Apploading from "expo-app-loading";

const fonts =() => Font.loadAsync({
    'montesserat-italic': require('../assets/fonts/Montserrat-MediumItalic.ttf'),
    'montesserat': require('../assets/fonts/Montserrat-Regular.ttf'),
});

export default function NewFont() {
    const [font, setFont] = useState(false);

    if (font) {
        return (<View style={stylesMain.container}>
            <Text style={stylesMain.text}>Загрузка</Text>
        </View>)
    } else {
        return (
            <Apploading
                startAsync={fonts}
                onFinish={() => {
                    setFont(true);
                }}
                onError={console.warn}
            />
        );
    }
}

const stylesMain = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        padding:30,
        backgroundColor: "#73b786",
    },
    text:{
        color:"#ffffff",
        fontSize:30,
        fontFamily:'montesserat',
    }
})