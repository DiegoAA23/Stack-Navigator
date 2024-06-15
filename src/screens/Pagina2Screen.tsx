import React from "react";
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {styles} from '../theme/appTheme';
import {StackActions} from '@react-navigation/native'
import { useEffect } from 'react';

export const Pagina2Screen = () => {
    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: ''
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina2Screen</Text>
            <Button
                title="Ir pagina 3"
                onPress={ () => navigator.dispatch(StackActions.push('Pagina3Screen'))}
            />
        </View>
    );
}