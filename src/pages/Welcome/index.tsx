import React, {memo} from 'react';

import { Text, View, FlatList, Image } from 'react-native';
import { useTema } from '../../context/theme';
import student from '../../assets/student.gif';
import studentBlack from '../../assets/studentBlack.gif';

import { Container,Buttons, AnimationContainer, TextContainer, TextWelcome, TextButtons} from './styles';
import LottieView from 'lottie-react-native';


const Welcome: React.FC = () => {

  const {  toggleTema, darkMode  } = useTema();

  console.log('Render')


  
  return (
    <Container>
<AnimationContainer>

      <Image source={darkMode ? studentBlack : student} style={{margin: 25, padding: 250, width: 200, height: 200}}></Image>


        </AnimationContainer>
       <TextContainer>
     <TextWelcome>
       Bem Vindo ao Pomodoo {"\n"}{"\n"}Pomodoro 
       é um método de gerenciamento de tempo desenvolvido por 
       Francesco Cirillo no final dos anos 1980. A técnica consiste 
       na utilização de um cronômetro para dividir o trabalho 
       em períodos de 25 minutos, separados por breves intervalos.
       {"\n"}{"\n"}Boa Produtividade
     </TextWelcome>
       </TextContainer>
      <Buttons onPress={() => toggleTema() }><TextButtons>Começar</TextButtons></Buttons>
  
    </Container> 
  );
};

export default Welcome;
