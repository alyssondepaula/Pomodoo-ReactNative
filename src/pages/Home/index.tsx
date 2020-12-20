import React, { useState } from 'react';
import { Text } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { useTema } from '../../context/theme';
import { withTheme } from 'styled-components'




import { Container, Header, TextDarkMode, Body, TextTimeTo } from './styles';
import Animated from 'react-native-reanimated';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';





const Home: React.FC = () => {

let _timer: number; 
let _timeTo: boolean = true; 


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

      <CountdownCircleTimer
      onComplete={() => {
        _timeTo=false;
        return [true, 1500] // repeat animation in 1.5 seconds
      }}
      isPlaying
    duration={100}
    colors={ darkMode ? [
      ['#3d3d3d', 0.5],
      ['#969696', 0.3],
      ['#808080', 0.2],
    ] :
    [
      ['#03bb85', 0.5],
      ['#F7B801', 0.3],
      ['#A30000', 0.2],
    ]
  
  }
  >




{({ remainingTime }) => {

let time = remainingTime;


let minutes = Math.floor(time!! / 60) ;
let seconds = time!! % 60;



    
    return <Animated.Text style={{ color: darkMode ? '#fff' : '#000'}}>
       
        {minutes +':'+seconds}
      
      </Animated.Text>
    }}
      
  </CountdownCircleTimer>

  {  
  _timeTo === true 
  ? 
  <TextTimeTo> Hora de Produzir </TextTimeTo>   
  : <TextTimeTo> Hora de Relaxar </TextTimeTo>
  
  }


      </Body>
    </Container>
  );
};

export default Home;
