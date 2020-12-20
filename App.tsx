import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import styles from './src/styles';

import { AppearanceProvider } from 'react-native-appearance';

import { TemaProvider, useTema } from './src/context/theme';
import { WelcomeProvider } from './src/context/welcome';


function ContentApp() {


  const { darkMode} = useTema();


  return ( 

  <ThemeProvider  theme={darkMode ? styles.dark : styles.light}>
  <StatusBar style={ darkMode ? 'light' : 'dark'} backgroundColor={ darkMode ? styles.dark.colors.background : styles.light.colors.background }/>
  <NavigationContainer>
    <Routes/>
  </NavigationContainer>
  </ThemeProvider>
  
); 
 }


export default function App() {

  return ( 

      <TemaProvider>
             <WelcomeProvider>
                 <ContentApp/>
             </WelcomeProvider>
     </TemaProvider>
  );
}