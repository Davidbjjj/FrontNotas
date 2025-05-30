import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SelectUserScreen from '../screens/SelectUserScreen';
import CadastroScreen from '../screens/Cadastro';
import CadastroProfessor from '../screens/professor/CadastroProfessor';
import LoginScreen from '../screens/LoginScreen';
import CadastroAluno from '../screens/aluno/CadastroAluno';
import HomeScreen from '@/screens/HomeScreen';
import CodigoRecupera from '../screens/CodigoRecupera/CodRecupera';
import NovaSenha from '../screens/NovaSenha/NovaSenha';
import EventoProva from '../screens/EventoProva/EventoProva';
import Calendario from '../screens/Calendario/Calendario';
import Inicio from '../screens/Inicio/Inicio';
import EventoProfessor from '../screens/EventoProfessor/EventoProfessorScreen';

export type RootStackParamList = {
  SelectUser: undefined;
  Cadastro: { tipo: string };
  CadastroProfessor: undefined;
  LoginScreen: undefined;
  CadastroAluno: undefined;
  Home: undefined;
  CodigoRecupera: undefined;
  NovaSenha: undefined;
  EventoProva: undefined;
  Calendario: undefined;
  Inicio: undefined;
  EventoProfessor: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="SelectUser">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SelectUser" component={SelectUserScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="CadastroProfessor" component={CadastroProfessor} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CadastroAluno" component={CadastroAluno} />
      <Stack.Screen name="CodigoRecupera" component={CodigoRecupera} />
      <Stack.Screen name="NovaSenha" component={NovaSenha} />
      <Stack.Screen name="EventoProva" component={EventoProva} />
      <Stack.Screen name="Calendario" component={Calendario} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="EventoProfessor" component={EventoProfessor} />
    </Stack.Navigator>
  );
}
