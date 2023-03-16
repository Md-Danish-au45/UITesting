
import React from 'react';
import {ImageBackground, StyleSheet, Text, Image,View,Dimensions,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function Screen1(){
  
  const navigation = useNavigation() 
  return(
  <View style={styles.container}>
    <View style={styles.header}>
      <Image source={require("../img/Group.png")} />
      <Text style={styles.txt}>Raise a Curious & Happy Baby!</Text>
    </View> 
    <ImageBackground source={require("../img/MotherSon.png")} resizeMode="stretch" style={styles.image}>
      <TouchableOpacity>
        <Text style={styles.text} onPress={() => navigation.navigate('Screen2')}>Let's Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
)
};

const {width} = Dimensions.get("screen")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#9EDEE3"
  },
  image: {
    flex: 1.5,
    justifyContent: "flex-end",   
  },
  text: {
    color: 'white',
    fontSize: 20,
    lineHeight: 40,
    fontWeight: 'bold',
    padding:3.66222,
    backgroundColor: '#57B5BC',
    borderRadius:50,
    marginBottom:20,
    width:width-20,
    alignSelf:"center",
    textAlign:"center"
  },
  header:{
    flex:1,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:60,
    marginTop:60
  },
  txt:{
    color:"white",
    fontSize:35,
    textAlign:"center",
    fontWeight:"bold",
    marginTop:80
  }
});

