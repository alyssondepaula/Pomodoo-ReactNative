import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useWelcome } from './context/welcome';
import AppRoutes from './routes/AppRoutes';
import WelcomeRoutes from './routes/WelcomeRoutes';

const Routes: React.FC = () => {
 
const { loading, welcome }= useWelcome();

if (loading) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#666" />
    </View>
  );
}

  return welcome == true ? <WelcomeRoutes/> : <AppRoutes/>;
};

export default Routes;
