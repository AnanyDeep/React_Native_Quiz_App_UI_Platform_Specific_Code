import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Platform,
  Text,
} from "react-native";
import * as Animatable from "react-native-animatable";

export default function Splash_Screen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1500);
  });

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {Platform.OS == "web" ? (
          <View style={styles.container}>
            <View style={styles.weblogoContainer}>
              <Animatable.View
                animation="zoomIn"
                duration={1500}
                style={styles.logoBackground}
              >
                <Image
                  style={styles.webLogo}
                  source={require("../assets/Logo.png")}
                />
              </Animatable.View>
            </View>
          </View>
        ) : (
          <View>
            <Animatable.View
              animation="zoomIn"
              duration={1500}
              style={styles.logoBackground}
            >
              <Image
                style={styles.webLogo}
                source={require("../assets/Logo.png")}
              />
            </Animatable.View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
  },

  webLogo: {
    height: 300,
    width: 300,
  },

  weblogoContainer: {
    backgroundColor: "#FFF",
    padding: 30,
    borderWidth: 10,
    borderColor: "#00acee",
    borderRadius: 50,
  },
});
