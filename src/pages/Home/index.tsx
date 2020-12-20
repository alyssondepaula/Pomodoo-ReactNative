import React from 'react';
import { Text } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { useTema } from '../../context/theme';

import { Container, Header, TextDarkMode, Body } from './styles';

const Home: React.FC = () => {

const { toggleTema, darkMode } = useTema();

  return (
    <Container>
      <Header>
        <TextDarkMode>Dark Mode: </TextDarkMode>
      <Switch
        trackColor={{ false: '#aaa', true: '#aaa' }}
        thumbColor={darkMode ? '#f3f3f3' : '#fff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTema}
        value={darkMode}
      />
      </Header>
      <Body>
        
      </Body>
    </Container>
  );
};

export default Home;
