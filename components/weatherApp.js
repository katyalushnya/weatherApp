import {Alert, StyleSheet, Text, View} from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';
import React, {useState} from "react";
import {isLoading} from "expo-font";

//ToDo: тут для полного прогноза погоды нужно создать новую страницу с https://openweathermap.org/ и еще сделать запроос к Api
export default class extends React.Component{

    state ={
        isLoading: true
    }

    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync();
            this.setState({isLoading: false});
            //ToDo: тут сделать запроос к Api
        } catch (error){
            Alert.alert('Не могу определить местоположение','Очень грустно:((((');
        }

    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        return (
            this.state.isLoading ? <Loading/> : null
        );
    }
}