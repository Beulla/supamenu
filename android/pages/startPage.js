import react from "react";
import { StyleSheet,View,Text,Fle } from "react-native";

export default function StartPage(){
    return(
        <View style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.supa}>Supa</Text>
                <Text style={styles.menu}>Menu</Text>
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
        flex:1,
        justifyContent:'center',
        // alignItems:'center',
        marginTop:200
    },
    supa:{
        color:"black",  
        fontWeight:'bold',
        fontSize:48
    },
    menu:{
        color:"white",
        fontWeight:'bold',
        fontSize:48
    }
})