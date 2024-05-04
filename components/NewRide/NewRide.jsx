import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  PlusJakartaSans_700Bold,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  useFonts,
} from "@expo-google-fonts/plus-jakarta-sans";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const NewRide = ({ navigation, route }) => {
  const [fonts] = useFonts({
    PlusJakartaSans_700Bold,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
  });

  // Today's date
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  let todayDate = yyyy + "-" + mm + "-" + dd;

  const [token, setToken] = useState(null);
  useEffect(() => {
    const getToken = async () => {
      const x = await AsyncStorage.getItem("user");
      setToken(x);
    };
    getToken();
  }, []);
  console.log(`token : ${token}`);
  const phNo = token;
  const [data, setData] = useState({
    tripDate: todayDate,
  });

  const handleChange = (text) => {
    setData({
      ...data,
      tripID: text,
      phoneNumber: token,
    });
    console.log(data);
  };

  const handleSubmit = async () => {
    try {
      console.log(data);
      const res = await axios.put(
        `https://polygon-project.onrender.com/driver/trip`,
        data
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Form with 2 TextInputs: 1. Today's date, 2. TripId  */}

      <View style={{ gap: 8, width: 340 }}>
        <Text
          style={{ fontFamily: "PlusJakartaSans_400Regular", fontSize: 16 }}
        >
          Trip Id
        </Text>
        <TextInput
          style={{ padding: 8, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => handleChange(text)}
        />
      </View>
      <TouchableOpacity
        onPress={() => handleSubmit()}
        style={{
          backgroundColor: "black",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewRide;
