import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Drawer from "./components/Drawer/Drawer";

export default function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    async function checkAuth() {
      const x = await AsyncStorage.getItem("user");
      setToken(x);
    }
    checkAuth();
  }, []);

  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
