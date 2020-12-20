import styled from 'styled-components/native';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
       display: flex;
       flex: 1;
       background-color: ${props => props.theme.colors.background};
       padding-top: ${statusBarHeight}px;
`;

export const TextDarkMode = styled.Text`
       font-size: 14px;
       color: ${props => props.theme.colors.secundary};
       
`;

export const TextTimeTo = styled.Text`
       font-size: 18px;
       color: ${props => props.theme.colors.secundary};
       margin-top: 24px;
       
`;

export const Header = styled.View`
       height: 10%;
       width: 100%;
       padding-right: 24px;
       flex-direction: row;
       align-items: center;
       justify-content: flex-end;
`;

export const Body = styled.View`
       display: flex;
       flex: 1;
       align-items: center;
       padding-top: 20%;
`;
