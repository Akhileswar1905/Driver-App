import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Dashboard from "../Dashboard/Dashboard";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import {
  useFonts,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_500Medium,
} from "@expo-google-fonts/plus-jakarta-sans";
import Earnings from "../Earnings/Earnings";
import StackNav from "../Stack/StackNav";
import FontAwesome from "@expo/vector-icons/FontAwesome6";
import MyCalendar from "../CalendarComponent/MyCalendar";
import NewRide from "../NewRide/NewRide";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Redirect from "../Redirect/Redirect";
const drawer = createDrawerNavigator();

export default function Drawer() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    PlusJakartaSans_700Bold,
    PlusJakartaSans_500Medium,
  });

  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      const x = await AsyncStorage.getItem("user");
      setToken(x);
      console.log(token);
    };
    getToken();
  }, []);

  const initRoute = token ? "Dashboard" : "Home";

  if (!fontsLoaded) {
    return null;
  }

  return (
    <drawer.Navigator
      initialRouteName={initRoute}
      drawerContent={(props) => {
        return <CustomDrawer {...props}></CustomDrawer>;
      }}
      screenOptions={{
        drawerActiveTintColor: "white",
        drawerLabelStyle: {
          fontFamily: "PlusJakartaSans_500Medium",
          fontSize: 15,
        },
        drawerActiveBackgroundColor: "black",
      }}
    >
      <drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "aqua",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 26,
            fontFamily: "PlusJakartaSans_700Bold",
          },
          drawerIcon: ({ color }) => {
            return <FontAwesome name="user" color={color} size={20} />;
          },
        }}
      />
      <drawer.Screen
        name="Calendar"
        component={MyCalendar}
        options={{
          title: "Calendar",
          drawerIcon: ({ color }) => {
            return <FontAwesome name="calendar" color={color} size={20} />;
          },
        }}
      />
      <drawer.Screen
        name="New Ride"
        component={NewRide}
        options={{
          title: "New Ride",
          drawerIcon: ({ color }) => {
            return <FontAwesome name="plus" color={color} size={20} />;
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "PlusJakartaSans_700Bold",
            fontSize: 24,
          },
        }}
      />

      <drawer.Screen
        name="Earnings"
        component={Earnings}
        options={{
          title: "Earnings",
          drawerIcon: ({ color }) => {
            return <FontAwesome name="wallet" color={color} size={20} />;
          },
          headerTitle: () => {
            return (
              <Text style={{ fontSize: 23 }}>
                Hello,{" "}
                <Text style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}>
                  Driver!
                </Text>
              </Text>
            );
          },
          headerRight: () => {
            return (
              <Pressable
                style={{ padding: 10 }}
                onPress={() => navigation.jumpTo("Dashboard")}
              >
                <Image
                  source={{
                    uri: "https://i.pinimg.com/564x/2f/71/61/2f71619dfea6bd1c5da62e6d1593e4b6.jpg",
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}
                ></Image>
              </Pressable>
            );
          },
        }}
      />
      <drawer.Screen
        name="Home"
        component={StackNav}
        options={{
          headerShown: false,
          drawerLabel: "Home",
          drawerLabelStyle: {
            display: "none",
          },
        }}
      />
    </drawer.Navigator>
  );
}
