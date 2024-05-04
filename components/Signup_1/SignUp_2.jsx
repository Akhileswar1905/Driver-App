import React, { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  PlusJakartaSans_500Medium,
  PlusJakartaSans_700Bold,
} from "@expo-google-fonts/plus-jakarta-sans";
import { useFonts } from "@expo-google-fonts/plus-jakarta-sans";

const SignUp_2 = ({ navigation, route }) => {
  console.log(route.params);
  const [fonts] = useFonts({
    PlusJakartaSans_500Medium,
    PlusJakartaSans_700Bold,
  });

  const [formData, setFormData] = useState(route.params.data);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.form}>
          <View style={styles.div}>
            <Text style={styles.label}>Aadhar</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleChange("Aadhar", text)}
            ></TextInput>
          </View>
          <View style={styles.div}>
            <Text style={styles.label}>PAN</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleChange("PAN", text)}
            ></TextInput>
          </View>
          <View style={styles.div}>
            <Text style={styles.label}>Bank Account Number</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleChange("AccNumber", text)}
            ></TextInput>
          </View>
          <View style={styles.div}>
            <Text style={styles.label}>Driving License</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleChange("DrivingLicense", text)}
              keyboardType=""
            ></TextInput>
          </View>
          <TouchableOpacity
            style={styles.submit}
            onPress={() =>
              navigation.navigate("Driver Details", { data: formData })
            }
          >
            <Text style={styles.btn}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // padding: 80,
  },

  form: {
    width: 340,
    padding: 20,
    gap: 12,
  },
  input: {
    width: "100%",
    padding: 6,
    backgroundColor: "#ddd",
    borderRadius: 8,
  },
  label: {
    fontFamily: "PlusJakartaSans_400Regular",
  },
  btn: {
    color: "white",
    fontSize: 16,
    fontFamily: "PlusJakartaSans_400Regular",
  },
  submit: {
    backgroundColor: "black",
    marginTop: 20,
    width: "100%",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  div: {
    gap: 8,
  },
});

export default SignUp_2;
