import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from "react-native";
export default function Checkout(){
    const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{title}</Text>
        </TouchableOpacity>
    );
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.checkout}>Checkout</Text>
                <Text style={styles.numbers}>Rwf 16000</Text>
                <Text style={styles.vat}>Including VAT (18%)</Text>
            </View>
            <View style={styles.pay}>
                <View style={styles.cards}>
                  <Ionicons name="card-outline" size={40} style={styles.icon1}></Ionicons>
                  <Text style={styles.credit}>Credit card</Text>
                </View>
                <Text style={styles.cash}>Mobile & Cash</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.texts}>Card Number</Text>
                <TextInput style={styles.inputs}></TextInput>
            </View>
            <View>
                <Text style={styles.texts}>Card Holder</Text>
                <TextInput style={styles.inputs}></TextInput>
            </View>
            <View style={styles.down}>
                <View>
                    <Text style={styles.texts}>Expiry Date</Text>
                    <TextInput style={styles.inputs}></TextInput>
                </View>
                <View style={styles.last}>
                    <Text style={styles.texts}>CVV/CVC</Text>
                    <TextInput style={styles.inputs}></TextInput>
                </View>
            </View>
            <View>
                <Text>We will send you order details to your email after successful payment</Text>
            </View>
            <CustomButton title="Pay for the order"/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    button:{
        width: '90%',
        padding: 19,
        color: 'white',
        alignItems: 'center',
        backgroundColor: '#25D482',
        borderRadius: 4,
        marginLeft: 18,
        marginTop: 10
    },
    checkout:{
        fontWeight:'bold',
        fontSize:40,
        marginLeft:5
    },
    numbers:{
        fontSize:30,
        color:'#25D482',
        marginLeft:120
    },
    vat:{
        color:'#B1B1B1',
        marginTop:40,
        marginLeft:-130,
        fontSize:15
    },
    top:{
        width:'97%',
        backgroundColor:'white',
        flexDirection:'row',
        paddingTop:80,
        borderRadius:13,
        marginLeft:7,
        marginTop:20,
        shadowColor:'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    cards:{
        backgroundColor:'#25D482',
        color:'white',
        borderRadius:15,
        marginLeft:30,
        marginTop:15,
        flexDirection:'row',
        padding:20,
        height:90,
        marginBottom:20
    },
    pay:{
        flexDirection:'row',
        width:'97%',
        marginLeft:7,
        borderRadius:25,
        backgroundColor:'#F8F8FB',
        marginTop:20
    },
    cash:{
        fontSize:20,
        padding:25,
        borderRadius:5,
        marginLeft:30,
        marginTop:20
    },
    credit:{
        marginTop:7,
        color:'white',
        fontSize:20,
        marginLeft:5
    },
    icon1:{
        color:'white'
    },
    texts:{
        fontSize:20,
        marginLeft:15
    },
    inputs:{
         backgroundColor:'#F8F8FB',
         width:'90%',
         padding:20,
         borderRadius:5,
         marginLeft:15,
         marginTop:5
    },
    form:{
        marginTop:15
    },
    down:{
        flexDirection:'row'
    },
    last:{
        marginLeft:130,
        width:'40%'
    }
})