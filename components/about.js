import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function About({navigation}) {


  return (
    <View>
      <Text>Add Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#b21f66",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#dcd6f7",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#424874"
  },
  forgot:{
    color:"#424874",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#424874",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"#f4eeff"
  },
  signupText:{
    color:"#424874"
  }
});