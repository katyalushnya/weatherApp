import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";

export default function Loading(){
    return (<View style={styles.container}>
        <Text style={styles.text}>Загрузка погоды...</Text>
    </View>);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        padding:30,
        backgroundColor: "#fff9df",
    },
    text:{
        color:"#69674e",
        fontSize:25,
    }
})