import react, { useState } from "react";
import { StyleSheet,View,TextInput,Button,Alert,Text,TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SignInPage(){
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
          <Text style={{color:'white', fontWeight:'bold'}}>{title}</Text>
        </TouchableOpacity>
      );
      const CustomButton1 = ({ onPress, title, buttonStyle, textStyle }) => (
        <TouchableOpacity style={[styles.button1, buttonStyle]} onPress={onPress}>
          <Text style={{color:'#F7941D'}}>{title}</Text>
        </TouchableOpacity>
      );
      const Google = ({ onPress, title, buttonStyle, textStyle }) => (
        <TouchableOpacity style={[styles.google, buttonStyle]} onPress={onPress}>
          <Text style={{color:'#9098B1', fontWeight:'bold'}}>{title}</Text>
        </TouchableOpacity>
      );
      const Facebook = ({ onPress, title, buttonStyle, textStyle }) => (
        <TouchableOpacity style={[styles.google, buttonStyle]} onPress={onPress}>
          <Text style={{color:'#9098B1', fontWeight:'bold'}}>{title}</Text>
        </TouchableOpacity>
      );
      const navigation=useNavigation()
    const handleNavigation=()=>{
        navigation.navigate('signup')
    }
    const handleFormSubmit=()=>{
        if(password.trim()===''|| email.trim()===''){
            Alert.alert('Error','Please fill in all fields')
        }
        else{
            Alert.alert('Success','form submited')
            setEmail('')
            setPassword('')
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.supamenu}>
                    <View style={styles.supmenu}>
                        <Text style={styles.supa}>Supa</Text>
                        <Text style={styles.menu}>Menu</Text>
                    </View>
                    <Text style={styles.welcome}>Welcome ...</Text>
                    <Text style={styles.info}>Sign in to continue</Text>
                </View>
                
                <View style={styles.withIcons}>
                    <Ionicons name="mail-outline" size={20} color='#9098B1' style={styles.icons}></Ionicons>
                    <TextInput style={styles.input} placeholder="your email" value={email} onChangeText={(text) => setEmail(text)} keyboardType="email-address"/>
                </View>

                <View style={styles.withIcons}>
                    <Ionicons name="lock-closed-outline" size={20} color='#9098B1' style={styles.icons}></Ionicons>
                    <TextInput style={styles.input} placeholder="password" value={password} onChangeText={(text) => setPassword(text)}/>
                </View>

                <CustomButton title="Sign In" onPress={handleFormSubmit} />

                <View style={styles.extras}>
                    <Text style={styles.extra}>Or</Text>
                    <Google title="Login with Google" />
                    <Ionicons name="logo-google" size={25} color='#9098B1' style={styles.logos}></Ionicons>
                    <Facebook title="Login with facebook" />
                    <Ionicons name="logo-facebook" size={25} color='#4092FF' style={styles.logos}></Ionicons>
                    <Text style={styles.password}>Forgot Password?</Text>
                    <CustomButton1 title="Don't have an account? Register" onPress={handleNavigation}/>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#F7941D'
    },
    form:{
        flex:1,
        backgroundColor:'white',
        marginTop:150,
        borderRadius:20,
        width:'100%'
    },
    button:{
        width:'98%',
        padding:19,
        color:'white',
        alignItems:'center',
        backgroundColor:'#F7941D',
        borderRadius:4,
        marginLeft:4,
        marginTop:10
    
    },
    supa:{
        color:"black",  
        fontWeight:'bold',
        fontSize:48
    },
    menu:{
        color:"#F7941D",
        fontWeight:'bold',
        fontSize:48,
        marginTop:-2
    },
    welcome:{
        color:'#223263',
        paddingTop:23
    },
    info:{
        color:'#9098B1',
        paddingTop:15
    },
    supamenu:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    supmenu:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        paddingTop:10
    },
    input:{
        width:'95%',
        borderRadius:8,
        height:60,
        borderColor:'#EBF0FF',
        borderWidth:1,
        paddingTop:3,
        marginTop:10,
        alignItems:'center',
        paddingLeft:30,
        marginLeft:-28
    },
    icons:{
        width:'5%',
        marginTop:30
    },
    withIcons:{
        flexDirection:'row',
        marginLeft:12
    },
    extra:{
        color:'#9098B1',
        paddingTop:20,
        marginTop:20
    },
    extra1:{
        color:'#9098B1',
        paddingTop:20,
        marginTop:20,
        marginBottom:20
    },
    extras:{
        justifyContent:'center',
        alignItems:'center'
    },
    google:{
        width:'98%',
        padding:19,
        alignItems:'center',
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:4,
        borderColor:'#9098B1',
        marginLeft:4,
        marginTop:30
    },
    logos:{
        marginLeft:-400,
        paddingTop:3,
        marginTop:-45,
        paddingLeft:30,
    },
    password:{
        marginTop:40,
        color:'#F7941D',
    },
    button1:{
        marginTop:0,
        color:'#F7941D',
    }
  });