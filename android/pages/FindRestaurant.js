import { Ionicons } from "@expo/vector-icons";
import react, { useState } from "react";
import { StyleSheet,View,Text,TextInput,Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { setSearchValue } from "./searchStore";

export default function FindRestaurant(){
    const [searchText,setSearchText]=useState('')
const navigation=useNavigation()
    const handleSearch = () => {
        setSearchValue(searchText);
        navigation.navigate('restaurant',{searchText})
      };
    return(
        <View style={styles.container}>
            <View style={styles.center}>
                <View style={styles.searchBox}>
                    <Ionicons name="search-outline" color='#F7941D' style={styles.search}></Ionicons>
                    <TextInput style={styles.searchInput} placeholder="Search for your preferred restaurant" value={searchText} onChangeText={searchText => setSearchText(searchText)} onSubmitEditing={handleSearch} />
                </View>
            </View>
            <View style={styles.low}>
                 <Text style={styles.or}>or</Text>
                 <View >
                 <Image source={require("../images.png")} style={styles.code}></Image>
                 </View>
                 <Text style={styles.scan}>Scan, Pay & Enjoy</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F7941D',
    },
    center:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:200
    },
    searchBox:{
        flexDirection:'row',
        backgroundColor:'white',
        width:'70%',
        alignItems:'center',
        padding:4,
        borderRadius:20,
        fontSize:20
    },
    searchInput:{
        marginLeft:15
    },
    search:{
        marginLeft:8
    },
    low:{
        alignItems:'center'
    },
    or:{
        marginTop:30,
        fontSize:30
    },
    code:{
        // backgroundColor:'black',
        // width:'20%',
        // height:80
        marginTop:10
    },
    scan:{
        marginTop:60,
        fontSize:30
    }
})