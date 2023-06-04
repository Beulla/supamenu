import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function RestoHome() {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    setSearchText(searchText);
    navigation.navigate('restaurant', { searchText });
  };

  const scrollViewRef = useRef(null);

  const handleScrollToEnd = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <View>
      <View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={searchText => setSearchText(searchText)}
          onSubmitEditing={handleSearch}
        />
      </View>
      <View style={styles.line}>
        <Text style={styles.near}>Nearby Restaurant</Text>
      </View>
      <ScrollView ref={scrollViewRef} style={styles.scrollview}>
        <View style={styles.div}>
          <Image source={require("../images.jpg")} style={styles.image} />
          <View style={styles.sideDiv}>
            <Text style={styles.choose}>Choose Kigali</Text>
            <Text style={styles.world}>World, African, Pizzeria, Coffee</Text>
          </View>
        </View>
        <View style={styles.div}>
          <Image source={require("../images.jpg")} style={styles.image} />
          <View style={styles.sideDiv}>
            <Text style={styles.choose}>Choose Kigali</Text>
            <Text style={styles.world}>World, African, Pizzeria, Coffee</Text>
          </View>
        </View>
        <View style={styles.div}>
          <Image source={require("../images.jpg")} style={styles.image} />
          <View style={styles.sideDiv}>
            <Text style={styles.choose}>Choose Kigali</Text>
            <Text style={styles.world}>World, African, Pizzeria, Coffee</Text>
          </View>
        </View>
        <View style={styles.div}>
          <Image source={require("../images.jpg")} style={styles.image} />
          <View style={styles.sideDiv}>
            <Text style={styles.choose}>Choose Kigali</Text>
            <Text style={styles.world}>World, African, Pizzeria, Coffee</Text>
          </View>
        </View>
        <View style={styles.div}>
          <Image source={require("../images.jpg")} style={styles.image} />
          <View style={styles.sideDiv}>
            <Text style={styles.choose}>Choose Kigali</Text>
            <Text style={styles.world}>World, African, Pizzeria, Coffee</Text>
          </View>
        </View>
        <View style={styles.div}>
          <Image source={require("../images.jpg")} style={styles.image} />
          <View style={styles.sideDiv}>
            <Text style={styles.choose}>Choose Kigali</Text>
            <Text style={styles.world}>World, African, Pizzeria, Coffee</Text>
          </View>
        </View>
        <View style={styles.div}>
          <Image source={require("../images.jpg")} style={styles.image} />
          <View style={styles.sideDiv}>
            <Text style={styles.choose}>Choose Kigali</Text>
            <Text style={styles.world}>World, African, Pizzeria, Coffee</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.icons}>
        <Ionicons name="home-outline" color='black' size={20} />
        <Ionicons name="notifications-outline" color='black' size={20} />
        <Ionicons name="cart-outline" color='black' size={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    padding: 10,
    paddingLeft: 30,
    marginTop:50
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: '#223263',
  },
  near: {
    color: '#F7941D',
    padding: 22,
  },
  image: {
    borderRadius: 8,
    width: 80,
    height: 80,
  },
  choose: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  div: {
    flexDirection: 'row',
    padding: 20,
    width: '90%',
    backgroundColor: '#F8F8FB',
    borderRadius: 8,
    marginLeft: 20,
    marginTop: 10,
  },
  sideDiv: {
    marginLeft: 20,
    padding: 10,
  },
  world: {
    paddingTop: 13,
    color: '#9098B1',
  },
  icons: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  scrollview:{
    height:620
  }
});
