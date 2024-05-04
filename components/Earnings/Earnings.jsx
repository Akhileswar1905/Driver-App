import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import {
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_400Regular,
} from "@expo-google-fonts/plus-jakarta-sans";
import { useFonts } from "@expo-google-fonts/plus-jakarta-sans";
import { SafeAreaView } from "react-native-safe-area-context";
import Redirect from "../Redirect/Redirect";

const Earnings = ({ navigation }) => {
  const [fonts] = useFonts({
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_400Regular,
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Total Earning */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <View style={styles.section}>
          <Text style={styles.heading}>Total Earnings</Text>
          <Text style={styles.text}>Rs. 50000</Text>
        </View>
      </View>

      {/* Monthwise Earning */}
      <ScrollView
        contentContainerStyle={{ gap: 12 }}
        style={{
          borderRadius: 20,
        }}
      >
        <View style={styles.monthSection}>
          <Text style={styles.month}>This Month</Text>
          <Text style={styles.earning}>Rs. 5000</Text>
        </View>
        <View style={styles.monthSection}>
          <Text style={styles.month}>April</Text>
          <Text style={styles.earning}>Rs. 5000</Text>
        </View>
        <View style={styles.monthSection}>
          <Text style={styles.month}>March</Text>
          <Text style={styles.earning}>Rs. 5000</Text>
        </View>
        <View style={styles.monthSection}>
          <Text style={styles.month}>Febraury</Text>
          <Text style={styles.earning}>Rs. 5000</Text>
        </View>
        <View style={styles.monthSection}>
          <Text style={styles.month}>January</Text>
          <Text style={styles.earning}>Rs. 5000</Text>
        </View>
        <View style={styles.monthSection}>
          <Text style={styles.month}>December</Text>
          <Text style={styles.earning}>Rs. 5000</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    width: 360,
  },
  heading: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 28,
    marginBottom: 10,
    color: "white",
  },
  text: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 20,
    marginBottom: 10,
    color: "white",
  },
  header: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: 340,
    backgroundColor: "#1e1e1e",
    padding: 40,
    borderRadius: 30,
  },
  monthSection: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    padding: 20,
    backgroundColor: "aqua",
    borderRadius: 10,
  },
  month: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 18,
  },
  earning: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 14,
  },
});

export default Earnings;
