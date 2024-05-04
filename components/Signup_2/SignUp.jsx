import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { PlusJakartaSans_500Medium } from "@expo-google-fonts/plus-jakarta-sans";
import { useFonts } from "@expo-google-fonts/plus-jakarta-sans";
const SignUp2 = ({ navigation, route }) => {
  const [fonts] = useFonts({
    PlusJakartaSans_500Medium,
  });
  console.log(route.params.data);
  const [formData, setFormData] = useState(route.params.data);
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.div}>
          <Text style={styles.text}>Car Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange("vehicleNumber", text)}
          ></TextInput>
        </View>
        <View style={styles.div}>
          <Text style={styles.text}>Car RC</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange("vehicleRC", text)}
          ></TextInput>
        </View>
        <View style={styles.div}>
          <Text style={styles.text}>Car Model</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange("vehicleModel", text)}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={styles.submit}
          onPress={() => navigation.navigate("Driver Details 2")}
        >
          <Text style={styles.btn}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
    backgroundColor: "white",
  },
  form: {
    width: 340,
    gap: 12,
    padding: 20,
    alignContent: "center",
  },
  div: {
    gap: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: "PlusJakartaSans_500Medium",
  },
  input: {
    width: "100%",
    padding: 6,
    borderRadius: 5,
    backgroundColor: "#ddd",
  },
  btn: {
    color: "white",
    fontSize: 16,
    fontFamily: "PlusJakartaSans_400Regular",
  },
  submit: {
    marginTop: 20,
    width: "100%",
    padding: 8,
    borderRadius: 8,
    backgroundColor: "black",
    alignItems: "center",
  },
});

export default SignUp2;
