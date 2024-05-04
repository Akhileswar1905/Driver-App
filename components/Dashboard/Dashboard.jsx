import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_600SemiBold,
} from "@expo-google-fonts/plus-jakarta-sans";
import { useFonts } from "@expo-google-fonts/plus-jakarta-sans";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Dashboard = ({ route }) => {
  const [fonts] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_600SemiBold,
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user
    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem("user");
        const response = await axios.get(
          `https://polygon-project.onrender.com/driver/${token}`,
          {
            params: {
              phoneNumber: token,
            },
          }
        );
        console.log(token);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.view1}>
          <ImageBackground></ImageBackground>
          {/* <Text style={styles.profile}>Profile</Text> */}
          <View>
            <Image
              source={{
                uri: user
                  ? user.photo
                  : "https://i.pinimg.com/564x/2f/71/61/2f71619dfea6bd1c5da62e6d1593e4b6.jpg",
              }}
              style={styles.profileImg}
            ></Image>
          </View>
          <View style={{ alignItems: "center", gap: 5 }}>
            <Text style={styles.text1}>
              {user ? user.username : "Driver Name"}
            </Text>
            <Text style={styles.text2}>
              {user ? user.phoneNumber : "1234567890"}
            </Text>
          </View>
          <View style={styles.det}>
            <Text>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                {user ? user.tripDetails.length : "0"}
              </Text>{" "}
              Trips{" "}
            </Text>
            <Text>|</Text>
            <Text>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                {user ? user.contractDetails.length : "0"}
              </Text>{" "}
              Contracts
            </Text>
          </View>
        </View>
        <View style={styles.view2}>
          <View style={styles.formLabel}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>
              {user ? user.email : "xyz@example.com"}
            </Text>
          </View>
          <View style={styles.formLabel}>
            <Text style={styles.label}>Date of Birth</Text>
            <Text style={styles.value}>{user ? user.dob : "01-01-2000"}</Text>
          </View>
          <View style={styles.formLabel}>
            <Text style={styles.label}>Vehicle Number</Text>
            <Text style={styles.value}>
              {user ? user.vehicleNumber : "1234 5678 9012"}
            </Text>
          </View>
          <View style={styles.formLabel}>
            <Text style={styles.label}>Vehicle Model</Text>
            <Text style={styles.value}>
              {user ? user.vehicleModel : "Model Name"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    paddingTop: 0,
  },
  view1: {
    backgroundColor: "aqua",
    display: "flex",
    padding: 25,
    width: 360,
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  profile: {
    fontSize: 26,
    fontFamily: "PlusJakartaSans_700Bold",
  },
  profileImg: { width: 100, height: 100, borderRadius: 50 },
  text1: {
    fontSize: 20,
    fontFamily: "PlusJakartaSans_700Bold",
  },
  text2: {
    fontSize: 16,
    fontFamily: "PlusJakartaSans_400Regular",
  },
  det: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 200,
  },
  view2: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 20,
  },
  formLabel: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: 7,
  },
  label: {
    fontSize: 14,
    fontFamily: "PlusJakartaSans_400Regular",
  },
  value: {
    fontSize: 16,
    fontFamily: "PlusJakartaSans_600SemiBold",
  },
  btn: {
    padding: 10,
    borderRadius: 5,
  },
  green: {
    backgroundColor: "green",
  },
  black: {
    backgroundColor: "black",
  },
  white: {
    color: "white",
  },
  btns: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Dashboard;
