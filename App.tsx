import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MenuLateral} from './src/navigator/MenuLateral';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico'
import {StackNavigator} from './src/navigator/StackNavigator'
import PokemonList from './src/pokemons/src/components/PokemonList'; 

const App = () => {
  return (
   <NavigationContainer>
    {/*<MenuLateral/>*/}
    {/*<StackNavigator/>*/}
    {/*<MenuLateralBasico/>*/}
    {/*PokemonList*/}
    <MenuLateral/>

   </NavigationContainer>
  );
};

export default App;
