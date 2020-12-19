import React, {memo} from 'react';

import { Text, View, FlatList } from 'react-native';
import { useTema } from '../../context/theme';
import books from '../../assets/books.json';

import { Container,Buttons, AnimationContainer, TextContainer, TextWelcome, TextButtons} from './styles';
import LottieView from 'lottie-react-native';











const Welcome: React.FC = () => {

  const {  toggleTema  } = useTema();

  console.log('Render')


  
  return (
    <Container>
<AnimationContainer>

<LottieView 
      autoPlay={true}
      loop={true}
       style={{ flex:1, width: 500, height: 500 }}
        source={books}
        
      />
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
