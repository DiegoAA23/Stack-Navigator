import React from "react";
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles} from '../theme/appTheme';
import { useEffect } from 'react';
import { DrawerActions } from "@react-navigation/native";

interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ({navigation}: Props) => {
    useEffect(() =>{
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="Menu"
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                />
            )
        })
    }, [])
    
    return (
        <View style={styles.globalMargin}>

            <Text style={styles.title}>Pagina1Screen</Text>
            
            <Button
                title="Ir pagina 2"
                onPress={ () => navigation.navigate('Pagina2Screen')}
            />

            <Text style={{
                marginVertical: 20,
                fontSize: 30,
                fontWeight: "bold",
            }}>Pokedex</Text>
            <Button
                title="Ver Pokémons"
                onPress={ () => navigation.navigate(('PokemonScreen'))}
            />

            <Text style={{
                marginVertical: 20,
                fontSize: 20,
            }}>Navegar con Argumentos
            </Text>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={ () => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={ () => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria'
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}