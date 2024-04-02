import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './PassStyle';

interface PassInputProps {
    pass: string;
}

export function PassInput(props : PassInputProps) {
    return (
        <TextInput
            style={styles.input}
            placeholder='pass'
            value={props.pass}
        />
    );
}