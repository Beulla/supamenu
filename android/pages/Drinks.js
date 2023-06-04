import React,{useRef} from "react";
import { getSearchValue } from "./searchStore";
import { View,Text,StyleSheet,ScrollView,Image,TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function Drinks(){
    const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{title}</Text>
        </TouchableOpacity>
    );
    const name=getSearchValue()
    const scrollViewRef = useRef(null);

  const handleScrollToEnd = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.drinks}>Drinks</Text>
            <ScrollView ref={scrollViewRef} style={styles.scrollview}>
        <View style={styles.div}>
          <Image source={require("../images.jpg")} style={styles.image} />
          <View style={styles.sideDiv}>
            <Text style={styles.choose}>Kaffir Lime Vodka, Lemongrass, Ginger, Citrus</Text>
            <Text style={styles.world}>Tom Yummy - 12.5</Text>
            <Text style={styles.price}>Rwf 5000</Text>
            <View style={styles.quantity}>
                <Text style={styles.signs}>-</Text>
                <Text> 2 </Text>
                <Text style={styles.signs}>+</Text>
            </View>
          </View>
        </View>
        <View style={styles.div}>
          <Image source={require("../images.jpg")} style={styles.image} />
          <View style={styles.sideDiv}>
            <Text style={styles.choose}>Gin, Grenaldine, Citrus, Cucumber</Text>
            <Text style={styles.world}>Singapore Sling - 12.5</Text>
            <Text style={styles.price}>Rwf 5000</Text>
            <View style={styles.quantity}>
                <Text style={styles.signs}>-</Text>
                <Text> 2 </Text>
                <Text style={styles.signs}>+</Text>
            </View>
          </View>
        </View>
        <View style={styles.div}>
          <Image source={require("../images.jpg")} style={styles.image} />
          <View style={styles.sideDiv}>
            <Text style={styles.choose}>Vanilla, Chocolate with hints of Orange</Text>
            <Text style={styles.world}>WWhite Russian - 12.5</Text>
            <Text style={styles.price}>Rwf 5000</Text>
            <View style={styles.quantity}>
                <Text style={styles.signs}>-</Text>
                <Text> 2 </Text>
                <Text style={styles.signs}>+</Text>
            </View>
          </View>
        </View> 
      </ScrollView>
      <View style={styles.more}>
        <Text style={styles.moredrinks}>More drinks</Text>
        <Ionicons name="md-arrow-forward-sharp" style={styles.arrow} size={35}></Ionicons>
      </View>
      <View style={styles.totals}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.number}>Rwf 15000</Text>
      </View>
      <CustomButton title="Proceed to checkout"/>
      <View style={styles.icons}>
        <Ionicons name="home-outline" color='black' size={20} />
        <Ionicons name="notifications-outline" color='black' size={20} />
        <Ionicons name="cart-outline" color='black' size={20} />
      </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    more:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:30,
        width:'100%',
        marginLeft:40
    },
    moredrinks:{
        color:'#F7941D',
        fontSize:25
    },
    arrow:{
        color:'#F7941D',
        marginLeft:25,
        width:'30%'
    },
    name:{
     marginTop:70,
     fontSize:30,
     marginLeft:250
    },
   drinks:{
    color:'#F7941D',
    marginTop:10,
    fontSize:30,
    marginLeft:350
  },
  image: {
    borderRadius: 8,
    width: 80,
    height: 80,
  },
  choose: {
    fontSize: 15,
    color:'#9098B1'
  },
  div: {
    flexDirection: 'row',
    padding: 15,
    width: '90%',
    backgroundColor: '#F8F8FB',
    borderRadius: 8,
    marginLeft: 20,
    marginTop: 10,
  },
  sideDiv: {
    marginLeft: 10,
    padding: 10,
  },
  world: {
    paddingTop: 7,
    color: 'black',
  },
  price:{
    color:'#F7941D',
    fontSize:20,
    paddingTop:5
  },
  quantity:{
    flexDirection:'row',
    backgroundColor:'white',
    width:'25%',
    borderRadius: 4,
    marginLeft: 190,
    marginTop: -26,   
    justifyContent:'center'    ,
    alignItems:'center'                           
  },
  signs:{
    color:'#F7941D',
    fontSize:20,
    // paddingTop:5
  },
  totals:{
    flexDirection:'row',
    marginTop:25
  },
  total:{
    marginLeft:30,
    fontSize:25
  },
  number:{
    marginLeft:260,
    fontSize:20
  },
  button: {
    width: '90%',
    padding: 19,
    color: 'white',
    alignItems: 'center',
    backgroundColor: '#F7941D',
    borderRadius: 4,
    marginLeft: 18,
    marginTop: 10

},
icons: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius:4,
  },
  
})