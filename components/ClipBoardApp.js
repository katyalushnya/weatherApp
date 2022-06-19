import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function ClipBoardApp() {
    const [changedText, onChangeText] = React.useState("Useless Text");
    const [copiedText, setCopiedText] = React.useState('');

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(changedText);
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText(text);
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={onChangeText} value={changedText}/>
            <Button title="Copy to Clipboard" onPress={copyToClipboard} />
            <Button title="View copied text" onPress={fetchCopiedText} />
            <Text style={styles.copiedText}>{copiedText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    copiedText: {
        marginTop: 10,
        color: 'red',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
