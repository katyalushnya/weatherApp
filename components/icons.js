import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from "react";
import { AntDesign } from '@expo/vector-icons';
import Svg, {Circle, Rect, SvgUri} from 'react-native-svg';


export default function Icons() {

    const [uri, setUri] = React.useState('https://thenewcode.com/assets/images/thumbnails/web-development-roles.svg')

    return (<View style={styles.container}>
            <AntDesign style={styles.icon} name="gitlab" size={50} color="white" />

            <Svg height="50%" width="50%" viewBox="0 0 100 100">
                <Circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="blue"
                    strokeWidth="2.5"
                    fill="green"
                />
                <Rect
                    x="15"
                    y="15"
                    width="70"
                    height="70"
                    stroke="red"
                    strokeWidth="2"
                    fill="yellow"
                />
            </Svg>

            <SvgUri
                onError={() => setUri('https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/ruby.svg')}
                width="100%"
                height="100%"
                uri={uri}
            />


    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-up",
        backgroundColor: "#73b786",
    },
    icon:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        bottom: '50%'
    }
})