import React, { useState, useLayoutEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function App({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Grow With Quiz",
      headerTitleAlign: "center",
      headerTintColor: "skyblue",
      //   headerTransparent: "true",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: {
        fontWeight: "700",
        fontSize: 30,
      },

      headerLeft: () => (
        <View>
          {Platform.OS == "web" ? (
            <View>
              <View style={{ marginLeft: 10 }}>
                <Image
                  source={require("../assets/Logo.png")}
                  style={{ height: 80, width: 80 }}
                />
              </View>
            </View>
          ) : (
            <View style={{ marginLeft: 10 }}>
              <Image
                source={require("../assets/Logo.png")}
                style={{ height: 60, width: 60 }}
              />
            </View>
          )}
        </View>
      ),
      headerRight: () => (
        <View style={{ marginRight: 10 }}>
          <AntDesign
            name="user"
            size={30}
            color="skyblue"
            onPress={() => alert("Header Right Pressed")}
          />
        </View>
      ),
    });
  }, [navigation]);

  const test = () => {
    alert("Login Pressed with event");
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {Platform.OS == "web" ? (
        <View
          style={{
            backgroundColor: "skyblue",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: "#FFF",
              paddingHorizontal: 80,
              paddingHorizontal: 100,
              paddingVertical: 30,
              borderRadius: 40,
              borderWidth: 8,
              borderColor: "#00acee",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "skyblue",
                fontWeight: "800",
              }}
            >
              LOGIN
            </Text>
            <TextInput
              style={{
                width: 300,
                height: 50,
                backgroundColor: "#FFF",
                marginTop: 10,
                borderRadius: 30,
                borderWidth: 4,
                borderColor: "skyblue",
                paddingLeft: 15,
                fontSize: 20,
                outLineStyle: "none",
                outlineWidth: 0,
                outlineColor: "transparent",
                color: "skyblue",
              }}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              autoFocus={true}
            />
            <TextInput
              style={{
                width: 300,
                height: 50,
                backgroundColor: "#FFF",
                marginTop: 10,
                borderRadius: 30,
                borderWidth: 4,
                borderColor: "skyblue",
                paddingLeft: 15,
                fontSize: 20,
                outLineStyle: "none",
                outlineWidth: 0,
                outlineColor: "transparent",
                color: "skyblue",
              }}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              secureTextEntry={true}
              onSubmitEditing={() => test()}
            />
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                // justifyContent: "space-evenly",
                marginTop: 8,
              }}
            >
              <TouchableOpacity onPress={() => alert("Login Pressed")}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "800",
                    color: "skyblue",
                    paddingTop: 20,
                    // justifyContent: "center",
                    marginRight: 50,
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "800",
                    color: "skyblue",
                    paddingTop: 20,
                  }}
                >
                  SignUp
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        //  HERE COMES THE ANDROID & IOS PART

        <View
          style={{
            backgroundColor: "skyblue",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              style={{ height: 200, width: 200 }}
              source={require("../assets/Logo.png")}
            />
          </View>
          <View
            style={{
              flex: 1.2,
              backgroundColor: "#FFF",
              alignItems: "center",
              borderTopRightRadius: 70,
              borderTopLeftRadius: 70,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "skyblue",
                fontWeight: "800",
              }}
            >
              LOGIN
            </Text>
            <TextInput
              style={{
                width: 300,
                height: 50,
                backgroundColor: "#FFF",
                marginTop: 10,
                borderRadius: 30,
                borderWidth: 4,
                borderColor: "skyblue",
                paddingLeft: 15,
                fontSize: 20,

                color: "skyblue",
              }}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              autoFocus={true}
            />
            <TextInput
              style={{
                width: 300,
                height: 50,
                backgroundColor: "#FFF",
                marginTop: 10,
                borderRadius: 30,
                borderWidth: 4,
                borderColor: "skyblue",
                paddingLeft: 15,
                fontSize: 20,

                color: "skyblue",
              }}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              secureTextEntry={true}
              onSubmitEditing={() => test()}
            />
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                // justifyContent: "space-evenly",
                marginTop: 8,
              }}
            >
              <TouchableOpacity onPress={() => alert("Login Pressed")}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "800",
                    color: "skyblue",
                    paddingTop: 20,
                    // justifyContent: "center",
                    marginRight: 50,
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "800",
                    color: "skyblue",
                    paddingTop: 20,
                  }}
                >
                  SignUp
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
