import React from 'react';
import {View, FlatList, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import estilo from './estilo';
import 'react-native-gesture-handler';

function Item({ title }) {
    return ( <>
      <TouchableOpacity>
      <View style={estilo.item}>
        
          <Text style={estilo.titulo}>{title}</Text>
  
      </View>
      </TouchableOpacity>
      </>
    );
  }

function App() {

  const DATA = [
    {
      id: 1,
      title: 'Português',
    },
    {
      id: 2,
      title: 'Física',
    },
    {
      id: 3,
      title: 'Matemática',
    },
    {
      id: 4,
      title: 'História',
    },
    {
      id: 5,
      title: 'Inglês',
    },
    {
      id: 6,
      title: 'Química',
    },
    
  ]

  return (
    <SafeAreaView
      style={estilo.container}
      >
        <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  )
}

export default App;