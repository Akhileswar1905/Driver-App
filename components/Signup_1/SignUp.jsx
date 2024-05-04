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

const SignUp = ({ navigation }) => {
  const [fonts] = useFonts({
    PlusJakartaSans_500Medium,
    PlusJakartaSans_700Bold,
  });

  const [formData, setFormData] = useState({});

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
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleChange("username", text)}
            ></TextInput>
          </View>
          <View style={styles.div}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleChange("dob", text)}
            ></TextInput>
          </View>
          <View style={styles.div}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleChange("PhoneNumber", text)}
            ></TextInput>
          </View>
          <View style={styles.div}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleChange("email", text)}
            ></TextInput>
          </View>

          <TouchableOpacity
            style={styles.submit}
            onPress={() =>
              navigation.navigate("Personal Details 2", { data: formData })
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
  heading: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 26,
    marginBottom: 20,
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
    marginTop: 20,
    width: "100%",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "black",
  },
  div: {
    gap: 8,
  },
});

export default SignUp;
