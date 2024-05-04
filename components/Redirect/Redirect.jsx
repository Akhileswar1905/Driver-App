import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Redirect = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Please SignUp/Login to Continue
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.jumpTo("Home");
        }}
      >
        <Text
          style={{
            color: "blue",
            textDecorationLine: "underline",
            marginTop: 20,
            fontSize: 18,
          }}
        >
          Click Here To Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Redirect;
