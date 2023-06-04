import React, { useEffect } from 'react';
import { View,Text,Image,StyleSheet,TouchableOpacity } from 'react-native';
import { getSearchValue } from './searchStore';
import { useNavigation } from '@react-navigation/native';
export default function Menu(){
  const searchText=getSearchValue()
  const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={{color:'white', fontWeight:'bold'}}>{title}</Text>
    </TouchableOpacity>
  );
const navigation=useNavigation()
  const handleNavigation=()=>{
    navigation.navigate("home")
}
  return (
    <View>
      <View>
        <Image source={require('../images.jpg')} style={styles.image}></Image>
      </View>
      <View style={styles.lowerDiv}>
        <Text style={styles.name}> {searchText}</Text>
        <CustomButton title="Enter" onPress={handleNavigation}/>
        <Text style={styles.check}>And checkout our menu</Text>
      </View>
    </View>

  );
}
Menu.navigationOptions = {
  header: () => null, // This will hide the header
};
const styles=StyleSheet.create({
    image:{
        height:350,
        width:'100%'
    },
    lowerDiv:{
      backgroundColor:'black',
      height:510,
      alignItems:'center',
    },
    name:{
      color:'white',
      fontSize:30,
      marginTop:40
    },
    button:{
      width:'60%',
      padding:19,
      color:'white',
      alignItems:'center',
      backgroundColor:'#F7941D',
      borderRadius:4,
      marginLeft:4,
      marginTop:110,
      fontSize:30
  
  },
  check:{
    color:'white',
    fontSize:30,
    marginTop:50
  }
})




