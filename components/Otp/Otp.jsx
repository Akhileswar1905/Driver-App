import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Otp = ({ navigation, route }) => {
  const [otp, setOtp] = useState("");
  const apiUrl = "https://polygon-project.onrender.com";
  const handleChange = (text) => {
    setOtp(text);
  };

  const handleResend = async () => {
    const phoneNumber = route.params.phoneNumber;
    try {
      console.log(phoneNumber);
      const response = await axios.post(`${apiUrl}/driver/auth`, {
        phoneNumber,
      });
      console.log("OTP sent successfully:", response.data);
      navigation.navigate("Phone Number Verification", {
        phoneNumber: phoneNumber,
      });
    } catch (error) {
      console.log(error.code);
      console.error("Error sending OTP:", error);
      Alert.alert("Error", "Failed to send OTP. Please try again later.");
    }
  };

  const verifyOtp = async () => {
    const response = await axios.post(`${apiUrl}/driver/auth/verify`, {
      phoneNumber: route.params.phoneNumber,
      OTP: otp,
    });
    console.log(response.data);
    if (response.status === 200) {
      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem("user", response.data.phoneNumber);
    }
    if (response.data.message === "Hello New User") {
      navigation.navigate("Personal Details", {
        phoneNumber: route.params.phoneNumber,
      });
    } else {
      navigation.jumpTo("Dashboard", {
        token: response.data.token,
        user: route.params.phoneNumber,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerBox}>
        <Text style={styles.subHeading}>
          Enter 4 digit verification code sent to your phone number
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleChange}
          keyboardType="number-pad"
        ></TextInput>
        <View style={styles.innerSubDiv}>
          <TouchableOpacity onPress={handleResend}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "PlusJakartaSans_400Regular",
                alignSelf: "center",
              }}
            >
              Resend OTP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submit} onPress={verifyOtp}>
            <Text style={styles.btn}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 60,
    // backgroundColor: "#000",
  },

  innerBox: {
    flex: 1,
    alignContent: "center",
    width: 340,
    padding: 20,
    borderRadius: 8,
    // backgroundColor: "black",
  },
  subHeading: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 20,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    width: "100%",
    padding: 8,
    marginTop: 20,
  },
  submit: {
    backgroundColor: "black",
    marginTop: 20,
    width: "100%",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  btn: {
    color: "white",
    fontSize: 16,
    fontFamily: "PlusJakartaSans_400Regular",
  },
  innerSubDiv: {
    padding: 30,
    width: "100%",
  },
});

export default Otp;
