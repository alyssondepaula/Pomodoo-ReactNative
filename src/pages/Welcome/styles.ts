import styled from 'styled-components/native';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  padding-top: ${statusBarHeight}px;
  justify-content: center;
`;

export const TextContainer = styled.View`
  width: 85%;
  height: 28%;
  margin-bottom: 24px;
`;

export const TextWelcome = styled.Text`
 color: ${props => props.theme.colors.text};
 font-size: 16px;
`;

export const TextButtons = styled.Text`
 color: ${props => props.theme.colors.btns};
 font-size: 16px;
`;



export const Buttons = styled.TouchableOpacity`
  width: 85%;
  height: 8%;
  background-color: ${props => props.theme.colors.secundary};
  margin-bottom: 24px; 
  border-radius: 18px;
  align-items:center;
  justify-content:center;
`;


export const AnimationContainer = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 100px;

`;