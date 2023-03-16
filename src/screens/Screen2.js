import { View, Text,StyleSheet,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { LinearGradient } from 'expo-linear-gradient';

// import { useFonts,lato } from 'expo-font'

//  work in progress

export default function Screen2() {
//   const [fonstloaded] = useFonts({
//     "Lato-Bold":require("../Lato/Lato-Bold.ttf")
  // })
  return (
    <View style={styles.container} >
       <LinearGradient
        // Background Linear Gradient
         colors={['#C2EFF5', '#9EDEE3', '#72C9CE', "#61C1C6"]}
        style={styles.background}
      >
    </LinearGradient>

        <View style={styles.header}>
            <Text style={styles.head1}>Set Your Parenting goals...</Text>
            <Text style={styles.head2}>We will personalise the program on it.</Text>
        </View >
        <View style={styles.constainer1}>
          <TouchableOpacity>
            <Text style={styles.text} ><FontAwesome5 name='cubes' size={25}  /> Boost Baby Development</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.text} ><FontAwesome5 name='laptop-house' size={25}  />Measure Progress</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.text} ><Feather name='headphones' size={25} />Spark Imagination with Stories</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.text} ><FontAwesome5 name='pizza-slice' size={25}  />Nutrition for Baby</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.text} ><MaterialCommunityIcons name='trackpad' size={25}  />Track Daily Logs</Text>
          </TouchableOpacity>
        </View>      
    </View>
  )
}

const {width} = Dimensions.get("screen")
const {height} = Dimensions.get("screen")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9EDEE3',
  },
  background: {
    position: 'absolute',
    left:0,
    right:0,
    top: 0,
    bottom:0,
    height:height
  },

      text: {
        color: 'grey',
        fontSize: 20,
        backgroundColor: '#C2EFF5',
        borderRadius:80,
        width:width-30,
        height: 50,
        paddingLeft:10,
        margin:10,
        paddingLeft:10,
        alignSelf:"center",
        paddingTop:10
      },

      constainer1:{
        backgroundColor:"#9EDEE3",
        flex: 1,
        flexDirection: "column",
        borderRadius: 10,
        paddingBottom: 20,
        justifyContent: "center"
      },
      header:{
        paddingLeft:20
    },
      head1:{
        width:width-30,
        fontSize:30,
        // fontFamily:"Lato",
        fontWeight:"bold",
        marginTop:50
      },
      head2:{
        width:width-30,
        fontSize:18
      }
})

