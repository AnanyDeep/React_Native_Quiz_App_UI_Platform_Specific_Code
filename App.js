import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home_Screen from "./screens/Home_Screen";
import Splash_Screen from "./screens/Splash_Screen";
import Start_Quiz from "./screens/Start_Quiz";
import B_P from "./screens/B_P";
import Rules_Screen from "./screens/Rules_Screen";
import Login_Screen from "./screens/Login_Screen";
import SignUp_Screen from "./screens/SignUp_Screen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Splash"
          component={Splash_Screen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen name="Home" component={Home_Screen} /> */}
        {/* <Stack.Screen name="Quiz" component={Start_Quiz} /> */}
        {/* <Stack.Screen
          name="Rules"
          component={Rules_Screen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen name="B_P" component={B_P} /> */}
        <Stack.Screen name="Login" component={Login_Screen} />
        <Stack.Screen name="SignUp" component={SignUp_Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
