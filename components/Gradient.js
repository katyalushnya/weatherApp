import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Gradient() {
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgb(105,103,78)', 'transparent']}
                style={styles.background}
            />
            <LinearGradient
                // Button Linear Gradient
                colors={['#acffc4', '#73b786', '#69674e']}
                style={styles.button}>
                <Text style={styles.text}>Sign in with Facebook</Text>
            </LinearGradient>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#73b786',
    },
    background: {
        position: 'absolute',
        flex: 1,
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 30,
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 25,
        color: '#fff',
    },
});
