import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../pages/Welcome';


const Stack = createStackNavigator();

function WelcomeRoutes() {
  return (
   
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
 
  );
}

export default WelcomeRoutes;