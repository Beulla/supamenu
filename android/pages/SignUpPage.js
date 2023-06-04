import react, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";


export default function SignUpPage() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{title}</Text>
        </TouchableOpacity>
    );
    const navigation = useNavigation()
    const handleNavigation = () => {
        navigation.navigate('signIn')
    }

    const handleFormSubmit = () => {
        if (name.trim() === '' || email.trim() === '') {
            Alert.alert('Error', 'Please fill in all fields')
        }
        else {
            
            axios.post("http://127.0.0.1:4000/users/register", email)
                .then(response => {
                    console.log("successfull")
                    console.log(response.data)
                    handleNavigation()
                })
                .catch(error => {
                    console.log("Error: ", error)
                })
            setName('')
            setPhone('')
            setEmail('')
            setPassword('')

        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.supamenu}>
                    <View style={styles.supmenu}>
                        <Text style={styles.supa}>Supa</Text>
                        <Text style={styles.menu}>Menu</Text>
                    </View>
                    <Text style={styles.welcome}>Welcome ...</Text>
                    <Text style={styles.info}>Please fill in the information</Text>
                </View>
                <View style={styles.withIcons}>
                    <Ionicons name="person-outline" size={20} color='#9098B1' style={styles.icons}></Ionicons>
                    <TextInput style={styles.input} placeholder="Full name" value={name} onChangeText={(text) => setName(text)} />
                </View>
                <View style={styles.withIcons}>
                    <Ionicons name="call-outline" size={20} color='#9098B1' style={styles.icons}></Ionicons>
                    <TextInput style={styles.input} placeholder="phone number" value={phone} onChangeText={(text) => setPhone(text)} keyboardType="numeric"/>
                </View>
                <View style={styles.withIcons}>
                    <Ionicons name="mail-outline" size={20} color='#9098B1' style={styles.icons}></Ionicons>
                    <TextInput style={styles.input} placeholder="your email" value={email} onChangeText={(text) => setEmail(text)} keyboardType="email-address" />
                </View>
                <View style={styles.withIcons}>
                    <Ionicons name="lock-closed-outline" size={20} color='#9098B1' style={styles.icons}></Ionicons>
                    <TextInput style={styles.input} placeholder="password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry/>
                </View>

                <CustomButton title="Proceed" onPress={handleFormSubmit} />

                <View style={styles.extras}>
                    <Text style={styles.extra}>Or</Text>
                    <Text style={styles.extra1}>If you have a PMG account</Text>
                    <CustomButton title="Signin" onPress={handleNavigation} />
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
        backgroundColor: '#F7941D'
    },
    form: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 130,
        borderRadius: 20,
        width: '100%'
    },
    button: {
        width: '98%',
        padding: 19,
        color: 'white',
        alignItems: 'center',
        backgroundColor: '#F7941D',
        borderRadius: 4,
        marginLeft: 4,
        marginTop: 10

    },
    supa: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 48
    },
    menu: {
        color: "#F7941D",
        fontWeight: 'bold',
        fontSize: 48,
        marginTop: -2
    },
    welcome: {
        color: '#223263',
        paddingTop: 23
    },
    info: {
        color: '#9098B1',
        paddingTop: 15
    },
    supamenu: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    supmenu: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        paddingTop: 10
    },
    input: {
        width: '95%',
        borderRadius: 8,
        height: 60,
        borderColor: '#EBF0FF',
        borderWidth: 1,
        paddingTop: 3,
        marginTop: 10,
        alignItems: 'center',
        paddingLeft: 30,
        marginLeft: -28
    },
    icons: {
        width: '5%',
        marginTop: 30
        // marginLeft:20
    },
    withIcons: {
        flexDirection: 'row',
        marginLeft: 12
    },
    extra: {
        color: '#9098B1',
        paddingTop: 2,
        marginTop: 20
    },
    extra1: {
        color: '#9098B1',
        paddingTop: 20,
        marginTop: 0,
        marginBottom: 20
    },
    extras: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});