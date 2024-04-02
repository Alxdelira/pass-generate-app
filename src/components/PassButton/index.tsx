import React, { useState } from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import generatePass  from '../../services/passService';
import { styles } from './styles';
import { PassInput } from '../PassInput';
import * as Clipboard from 'expo-clipboard';

export function PassButton() {
    const [pass, setPass] = useState('');
    function handleGeneratePass() {
        let generateToken = generatePass()
        setPass(generateToken);
    }
    function handleCopyPass() {
        Clipboard.setStringAsync(pass);
    }

    return (
        <>
            <PassInput
                pass={pass}
            />
            <Pressable
                style={styles.button}
                onPress={handleGeneratePass}
            >
                <Text style={styles.text}>Generate 🔒</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={handleCopyPass}
            >
                <Text style={styles.text}>⚡ Copy</Text>
            </Pressable>
        </>
    );
}