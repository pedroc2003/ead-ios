import React, {useState} from 'react';
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import estilo from "./estilo";

function formulario({navigation}){
    const [titulo,setTitulo]=useState("");
    const [descricao,setDescricao]=useState("");
    const text = ("")
  
    function capturei(){
      console.log(titulo+" "+descricao)
    }
  return(
      <View style={estilo.container}>
        <Text style={[estilo.Texto]}>Formulário</Text>
      <TextInput style={[estilo.Form1]}
      placeholder="Título"
      onChangeText={text => setTitulo(text)}
      >   
  
      </TextInput>
      <TextInput style={[estilo.Form2]}
      placeholder="Descrição"
      onChangeText={text => setDescricao(text)}
      >
  
      </TextInput>
  
      <TouchableOpacity onPress={capturei}>
        
        <Text style={[estilo.Botao]}>Enviar</Text>
      </TouchableOpacity>
      </View>
      )
  }
  export default formulario