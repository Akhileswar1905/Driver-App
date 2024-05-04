import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Login/Login";
import SignUp_2 from "../Signup_1/SignUp_2";
import SignUpFinal from "../Signup_2/SignUpFinal";
import Dashboard from "../Dashboard/Dashboard";
import Earnings from "../Earnings/Earnings";
import Otp from "../Otp/Otp";
import SignUp from "../Signup_1/SignUp";
import NewRide from "../NewRide/NewRide";
import Trips from "../Trips/Trips";

const stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: "#fff",
        },
      }}
      initialRouteName="Login"
    >
      <stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Authentication",
        }}
      />
      <stack.Screen name="Phone Number Verification" component={Otp} />
      <stack.Screen name="Personal Details" component={SignUp} />
      {/* <stack.Screen name="NewRide" component={NewRide} /> */}
      <stack.Screen name="Trips" component={Trips} />

      <stack.Screen
        name="Personal Details 2"
        component={SignUp_2}
        options={{
          title: "Personal Details",
        }}
      />
      <stack.Screen name="Driver Details" component={SignUp_2} />
      <stack.Screen
        name="Driver Details 2"
        component={SignUpFinal}
        options={{ title: "Documents" }}
      />
      {/* <stack.Screen
        name="Profile"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="Earnings"
        component={Earnings}
        options={{
          headerShown: false,
        }}
      /> */}
    </stack.Navigator>
  );
}
