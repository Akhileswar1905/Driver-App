import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
const CustomDrawer = (props) => {
  const navigation = props.navigation;

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/2f/71/61/2f71619dfea6bd1c5da62e6d1593e4b6.jpg",
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            alignSelf: "center",
            margin: 20,
          }}
        ></Image>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontFamily: "PlusJakartaSans_700Bold",
          }}
        >
          Driver Name
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}></DrawerItemList>
      </DrawerContentScrollView>

      {/* Logout btn */}
      <TouchableOpacity
        onPress={() => handleLogout()}
        style={{
          padding: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            fontFamily: "PlusJakartaSans_700Bold",
            color: "white",
            backgroundColor: "red",
            padding: 10,
            borderRadius: 10,
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            fontFamily: "PlusJakartaSans_700Bold",
            margin: 20,
          }}
        >
          v1.0.0
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
