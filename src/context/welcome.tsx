import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import Welcome from '../pages/Welcome';


interface Welcome {
  welcome: boolean,
  loading: boolean,
  toggleWelcome(): Promise<void>;
}



const WelcomeContext = createContext<Welcome>({} as Welcome);

const WelcomeProvider: React.FC = ({children}) => {

  const [welcome, setWelcome] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
 
        const checkWelcome = async () => {

          try {
            const value = await AsyncStorage.getItem('@welcome')

            if(value !== null) {
              
            value == 'true' ? setWelcome(false) : setWelcome(true)
            setLoading(false)

            }
          } catch(e) {
             Alert.alert('Error database read')
          }
        


          setLoading(false)
        }
        checkWelcome();
  },[])

  const toggleWelcome =  async () => { 

    try {
      await AsyncStorage.setItem('@welcome', 'true')
    } catch (e) {
      Alert.alert('Error set Welcome')
    }
    
    setWelcome(false) 
  
  }

  return (
    <WelcomeContext.Provider value={{ welcome: welcome, loading: loading, toggleWelcome }}>
    {children}
    </WelcomeContext.Provider>
  );
};

function useWelcome() {
  const context = useContext(WelcomeContext);
  if (!context) {
    throw new Error('useWelcome must be used within an WelcomeProvider.');
  }
  return context;
}

export {WelcomeProvider, useWelcome};