import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';


interface Tema {
  temaNome: string,
  darkMode: boolean,
  toggleTema(): Promise<void>;
}



const TemaContext = createContext<Tema>({} as Tema);

const TemaProvider: React.FC = ({children}) => {

  const [dark, setDark] = useState(false);

  const [temaNome, setTema] = useState('light');
  
  useEffect(()=>{
 
        const getTheme = async () => {

          try {
            
            const value = await AsyncStorage.getItem('@theme')
            if(value !== null) {

              value === 'light' ? setDark(false) : setDark(true)
             
            }else {
              setDark(false)
              try {
                await AsyncStorage.setItem('@theme', 'light')
              } catch (e) {
                Alert.alert('Error database Set')
              }
            }
          } catch(e) {
             Alert.alert('Error database Read')
          }
        }


        getTheme();
  },[])

  const toggleTema =  async () => {
    
    try {
      await AsyncStorage.setItem('@theme',  dark == true ? 'light': 'dark')
      setDark(!dark)
    } catch (e) {
      Alert.alert('Error database Set')
    }
  }
  return (
    <TemaContext.Provider value={{ temaNome: temaNome, darkMode: dark, toggleTema }}>
    {children}
    </TemaContext.Provider>
  );
};

function useTema() {
  const context = useContext(TemaContext);
  if (!context) {
    throw new Error('useAuth must be used within an ThemeProvider.');
  }
  return context;
}

export {TemaProvider, useTema};