import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import {LinearGradient} from "expo-linear-gradient";


export default function MaskText() {
    return (
            <MaskedView style={{ flex: 1, flexDirection: 'row', height: '100%' }}
                maskElement={
                    <View
                        style={{backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                        <Text
                            style={{
                                fontSize: 40,
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            Text Text Text
                        </Text>
                    </View>
                }
            >
                {/* Shows behind the mask, you can put anything here, such as an image */}
                <LinearGradient
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    locations={[0,0.5,0.6]}
                    useAngle={true}
                    angle={45}
                    angleCenter={{x: 0.5, y: 0.5}}
                    colors={['#ffffff', '#73b786', '#000000']}
                    style={{flex: 1, height: '100%'}}>
                </LinearGradient>
            </MaskedView>

    );
}

