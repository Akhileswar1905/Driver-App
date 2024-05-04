import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";

const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const apiUrl = "https://polygon-project.onrender.com";

  const handleChange = (text) => {
    setPhoneNumber(text);
  };

  const handleSendOTP = async () => {
    try {
      console.log(phoneNumber);
      if (phoneNumber.startsWith(+91)) {
        setPhoneNumber(phoneNumber.substring(3));
      }
      const response = await axios.post(`${apiUrl}/driver/auth`, {
        phoneNumber: `+91${phoneNumber}`,
      });
      console.log("OTP sent successfully:", response.data);
      navigation.navigate("Phone Number Verification", {
        phoneNumber: "+91" + phoneNumber,
      });
    } catch (error) {
      console.log(error.code);
      console.error("Error sending OTP:", error);
      Alert.alert("Error", "Failed to send OTP. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/add5/d5eb/6fa21aed0548c29f82ec9d1c093c4409?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sj2jFU43lARiin18atKHtioqaEIUkI4o57HPjRP0JkPChXw5N~qxX18p6pmvJgYy0abGzaxjtA5zN5GA3eNbBrL6aD2Te0nAGFAqJjjpj4ChFbgXOMhZRtgXoU~w4NlpbRzFyAKkEyujxGBJwha6erUIcZYOBU~fdmkZeLYEt4itMDs0sIlwPC~SoLUG2rbeALRLUI39yugvv9fLsn1e-ep6SZ13708-OY-fkkLhtf0ivwun2i6q-gKxgdCEK1bA4FBt--o~MN1FdXAzIIVvjHuy0vAO9sK6We7GRypOV5obpjL68qF6ZyRG-VpMIQcB67foDFcH4mhD0ebAiDinyQ__",
        }}
        style={styles.img}
      ></Image>
      <Text style={styles.heading}>Enter Your Phone Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={phoneNumber}
      />
      <TouchableOpacity style={styles.btn} onPress={handleSendOTP}>
        <Text style={{ color: "white" }}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: { width: 300, height: 200 },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    width: "75%",
    padding: 8,
    marginTop: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,
  },
  btn: {
    backgroundColor: "black",
    marginTop: 20,
    width: "75%",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});

export default Login;
