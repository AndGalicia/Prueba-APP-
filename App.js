import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Ellipse, } from "react-native-svg"


export default function App() {

  function SvgTop() {
    return (
      <Svg
    width={348}
    height={351}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <Path fill="#0087D3" d="M0 0h338v234H0z" />
    <Ellipse cx={272} cy={281} rx={125} ry={70} fill="#F1F1F1" />
    <Ellipse cx={93.5} cy={227.5} rx={93.5} ry={53.5} fill="#0087D3" />
    <Path fill="#fff" d="M137 186V32h46v154z" />
    <Path fill="#fff" d="M83 86h154v46H83z" />
    </Svg>
            
    )
  }


  return (
    <View style={styles.container}>
      <SvgTop
      style={styles.svgContainer}
      />
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subtitulo}>Sing in to your account</Text>
      <TextInput
        placeholder="Admin o Technician"
        style={styles.textInput}/>
       <TextInput
        placeholder="pasword"
        style={styles.textInput}/>
        <Pressable style={styles.marco}>
            <Text style={styles.button}>Sing In</Text>
        </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgContainer: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titulo: {
    fontSize: 40, 
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  subtitulo: {
    fontSize: 15, 
    color: '#0087D3',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  marco: {
    padding: 5,
    backgroundColor: 'black',
    borderRadius: 30,
    marginTop: 15,
    width: '25%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    fontSize: 20, 
    color: 'white',
    fontWeight: 'bold',
  },
 
  
  

});
