import React, {useState} from 'react';
import { TextInput, View, Text, TouchableOpacity, Button, KeyboardAvoidingView, SafeAreaView} from "react-native";
import estilo from "./estilo";
import auth from '@react-native-firebase/auth';



function login({navigation}){
    const [email,setEmail]=useState("");
    const [senha,setSenha]=useState("");
    const text = ("")

    function capturei(){
      console.log(email+" "+senha)
    }

    logar=()=>{
      auth()
        .signInWithEmailAndPassword(email, senha)
        .then(() => {
          console.log('User account created & signed in!');
      })
      .catch(error => {
       console.log(error);
      })
    }

  return(
    <KeyboardAvoidingView
  style = {{ flex: 1 }}>
      <View style={estilo.container}>
        <Text style={[estilo.Texto]}>Login</Text>
       
      <TextInput style={[estilo.Form1]}
      placeholder="Email"
      autoCapitalize='none'
      keyboardType="email-address"
      onChangeText={text => setEmail(text)}
      >   
  
      </TextInput>
      <TextInput style={[estilo.Form2]}
      placeholder="Senha"
      secureTextEntry={true}
      onChangeText={text => setSenha(text)}
      >
  
      </TextInput>
  
      <TouchableOpacity onPress={logar}>
        
        <Text style={[estilo.Botao]}>Logar</Text>
      </TouchableOpacity>

      <Button
        color='#fff'
        title="Ir para Formulário"
        onPress={() => navigation.navigate('Formulario')}
      />
      <Button
        color='#fff'
        title="Ir para Home"
        onPress={() => navigation.navigate('Home')}
      />
      
      </View>
      </KeyboardAvoidingView>
      )
  }


  export default login;