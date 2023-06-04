import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity,Image } from "react-native";
import { setSearchValue,getSearchValue } from "./searchStore";
import { Ionicons } from "@expo/vector-icons";
import Ellipse from "./table";
import { Svg,ClipPath,Path, Rect,Defs,Circle } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

export default function RestoOrder() {
  const [showPage, setShowPage] = useState(false);
  const searchText=getSearchValue()
  const navigation=useNavigation()
  const handleNavigation=()=>{
      navigation.navigate('drinks')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.choose}> {searchText}</Text>
      <View style={styles.body}>
        <View style={styles.bodyItems}>
          <View style={styles.ellipse}>
            <Svg width={100} height={40} viewBox="0 0 37.82 12.16">
              <ClipPath id="clip">
                <Path d="M36.817 6.07937C36.817 8.88462 28.7991 11.1587 18.9085 11.1587C9.01791 11.1587 1 8.88462 1 6.07937C1 3.27411 9.01791 1 18.9085 1C28.7991 1 36.817 3.27411 36.817 6.07937Z" />
              </ClipPath>
              <Path d="M1 1V11.1587H36.817V1" fill="#000000" clipPath="url(#clip)" />
              <ClipPath id="clip2">
                <Path d="M0 0V12.1587H37.817V0M36.817 6.07937C36.817 8.88462 28.7991 11.1587 18.9085 11.1587C9.01791 11.1587 1 8.88462 1 6.07937C1 3.27411 9.01791 1 18.9085 1C28.7991 1 36.817 3.27411 36.817 6.07937Z" />
              </ClipPath>
              <Path d="M36.817 6.07937C36.817 8.88462 28.7991 11.1587 18.9085 11.1587C9.01791 11.1587 1 8.88462 1 6.07937C1 3.27411 9.01791 1 18.9085 1C28.7991 1 36.817 3.27411 36.817 6.07937Z" strokeWidth={2} stroke="#F7941D" clipPath="url(#clip2)" />
            </Svg>
            <View style={styles.ellipse2}>
              <Svg width={100} height={50} viewBox="0 5 38 20">
                <ClipPath id="clip">
                  <Path d="M36.817 6.07937C36.817 8.88462 28.7991 11.1587 18.9085 11.1587C9.01791 11.1587 1 8.88462 1 6.07937C1 3.27411 9.01791 1 18.9085 1C28.7991 1 36.817 3.27411 36.817 6.07937Z" />
                </ClipPath>
                <Path d="M1 1V11.1587H36.817V1" fill="#000000" clipPath="url(#clip)" />
                <ClipPath id="clip2">
                  <Path d="M0 0V12.1587H37.817V0M36.817 6.07937C36.817 8.88462 28.7991 11.1587 18.9085 11.1587C9.01791 11.1587 1 8.88462 1 6.07937C1 3.27411 9.01791 1 18.9085 1C28.7991 1 36.817 3.27411 36.817 6.07937Z" />
                </ClipPath>
                <Path d="M36.817 6.07937C36.817 8.88462 28.7991 11.1587 18.9085 11.1587C9.01791 11.1587 1 8.88462 1 6.07937C1 3.27411 9.01791 1 18.9085 1C28.7991 1 36.817 3.27411 36.817 6.07937Z" strokeWidth={2} stroke="#F7941D" clipPath="url(#clip2)" />
              </Svg>
            </View>
            
            <Svg width={60} height={30} viewBox="0 0 37.82 7.08" style={styles.rect}>
              <ClipPath id="clip-path">
                <Path d="M1 1H36.817V6.07937H1V1Z" />
              </ClipPath>
              <Rect
                x={1}
                y={1}
                width={36.817}
                height={6.07937}
                fill="#000000"
                clipPath="url(#clip-path)"
              />
              <ClipPath id="clip-path-2">
                <Path d="M0 0V7.07937H37.817V0M1 1H36.817V6.07937H1V1Z" />
              </ClipPath>
              <Path
                d="M1 1H36.817V6.07937H1V1Z"
                fill="none"
                strokeWidth={2}
                stroke="#F7941D"
                clipPath="url(#clip-path-2)"
              />
      </Svg>
          </View>
            <Text style={styles.text1}>Enter table number</Text>
        </View>
        <View style={styles.bodyItems}>
            <Text style={styles.text1}>Call Waiter</Text>
        </View>
      </View>
      <Text style={styles.menu}>menu</Text>
      <View style={styles.below}>
        <View style={styles.items}>
        <Text style={styles.text}>Appetizer</Text>
        <Ionicons name="caret-forward-outline" size={15} style={styles.icons}></Ionicons>
      </View>
      <View style={styles.items}>
        <Text style={styles.text}>Starter     </Text>
        <Ionicons name="caret-forward-outline" size={15} style={styles.icons}></Ionicons>
      </View>
      <View style={styles.items}>
        <Text style={styles.text}>Main         </Text>
        <Ionicons name="caret-forward-outline" size={15} style={styles.icons}></Ionicons>
      </View>
      <View style={styles.items}>
        <Text style={styles.text}>Dessert    </Text>
        <Ionicons name="caret-forward-outline" size={15} style={styles.icons}></Ionicons>
      </View>
      <View style={styles.items}>
          <TouchableOpacity onPress={handleNavigation}>
          <Text style={styles.text}>Drink         </Text>
        </TouchableOpacity>
        
        <Ionicons name="caret-forward-outline" size={15} style={styles.icons}></Ionicons>
      </View>
      </View>
    </View>
  );
}

const PageOne = () => {
 
};

const PageTwo = () => {
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize:50,
    backgroundColor:'black',
  },
  choose:{
    color:'#F7941D',
    fontSize:30,
    marginLeft:140,
    marginTop:70
  },
  body:{
    // flex:1,
    flexDirection:'row'
  },
  bodyItems:{
      flex:1,
      marginLeft:30,
      flexDirection:'column',
      marginTop:50
  },
    image:{
      height:80,
      width:'60%'
  },
  items:{
    // flex:1,
    flexDirection:'row',
    marginLeft:120,
    marginTop:30
  },
  icons:{
    marginLeft:120,
    color:'white'
  },
  below:{
    marginTop:50
  },
  text:{
    color:'white',
    fontSize:20
  },
  menu:{
    color:'#F7941D',
    fontSize:30,
    marginTop:70,
    marginLeft:180
  },
  text1:{
    color:'white',
    fontSize:20,
    marginTop:40
  },
  ellipse2:{
    marginTop:-6
  },
  rect: {
      boxSizing: 'border-box',
      transform: [{ rotate: '90deg' }],
      transformOrigin: 'center',
      marginLeft:20,
      marginTop:-16
    },
});
