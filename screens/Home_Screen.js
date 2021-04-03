import React, { useLayoutEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";

export default function Home_Screen({ navigation }) {
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
        <View style={{ marginLeft: 10 }}>
          <Image
            source={require("../assets/Logo.png")}
            style={{ height: 80, width: 80 }}
          />
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

  const [beginner, setBeginner] = useState(false);
  const [medium, setMedium] = useState(false);
  const [hard, setHard] = useState(false);
  const [python, setPython] = useState(false);
  const [java, setJava] = useState(false);
  const [javascript, setJavascript] = useState(false);
  const [reactnative, setReactNative] = useState(false);
  const [reactjs, setReactJS] = useState(false);

  const select = () => {
    if (beginner == true && java == true) {
      alert("Beginner With Java");
      // navigation.navigate("Rules");
    }
    if (beginner == reactjs && reactjs == true) {
      alert("Beginner with ReactJS");
    } else {
      alert("Invalid Choice");
    }
  };

  return (
    <View style={styles.mainContainer}>
      {Platform.OS == "web" ? (
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <View style={styles.webContainer}>
            <View style={styles.levelContainer}>
              <View style={styles.catagoryLevel}>
                <Text style={styles.levelTxt}>BEGINNER</Text>

                <Checkbox
                  color="skyblue"
                  status={beginner ? "checked" : "unchecked"}
                  onPress={() => {
                    setBeginner(!beginner);
                  }}
                />
              </View>

              <View style={styles.catagoryLevel}>
                <Text style={styles.levelTxt}>MEDUIM</Text>

                <Checkbox
                  color="skyblue"
                  status={medium ? "checked" : "unchecked"}
                  onPress={() => {
                    setMedium(!medium);
                  }}
                />
              </View>

              <View style={styles.catagoryLevel}>
                <Text style={styles.levelTxt}>HARD</Text>
                <Checkbox
                  color="skyblue"
                  status={hard ? "checked" : "unchecked"}
                  onPress={() => {
                    setHard(!hard);
                  }}
                />
              </View>
              <Button
                title=" SELECT"
                onPress={() => {
                  select();
                }}
              />
            </View>
          </View>

          {/* Here starts Catagory List */}

          <View style={styles.webContainer}>
            <View style={styles.levelContainer}>
              <View style={styles.catagoryLevel}>
                <Text style={styles.levelTxt}>PYTHON</Text>
                <Checkbox
                  color="skyblue"
                  status={python ? "checked" : "unchecked"}
                  onPress={() => {
                    setPython(!python);
                  }}
                />
              </View>

              <View style={styles.catagoryLevel}>
                <Text style={styles.levelTxt}>JAVA</Text>
                <Checkbox
                  color="skyblue"
                  status={java ? "checked" : "unchecked"}
                  onPress={() => {
                    setJava(!java);
                  }}
                />
              </View>

              <View style={styles.catagoryLevel}>
                <Text style={styles.levelTxt}>JAVASCRIPT</Text>
                <Checkbox
                  color="skyblue"
                  status={javascript ? "checked" : "unchecked"}
                  onPress={() => {
                    setJavascript(!javascript);
                  }}
                />
              </View>
              <View style={styles.catagoryLevel}>
                <Text style={styles.levelTxt}>REACT NATIVE</Text>
                <Checkbox
                  color="skyblue"
                  status={reactnative ? "checked" : "unchecked"}
                  onPress={() => {
                    setReactNative(!reactnative);
                  }}
                />
              </View>
              <View style={styles.catagoryLevel}>
                <Text style={styles.levelTxt}>REACT JS</Text>
                <Checkbox
                  color="skyblue"
                  status={reactjs ? "checked" : "unchecked"}
                  onPress={() => {
                    setReactJS(!reactjs);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <Text>This is on {Platform.OS}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    backgroundColor: "skyblue",
  },
  webContainer: {
    alignItems: "center",
  },
  levelTxt: {
    fontSize: 24,
    paddingRight: 12,
    marginBottom: 10,
    color: "skyblue",
    fontWeight: "700",
  },
  catagoryTxt: {
    fontSize: 30,
    backgroundColor: "#FFF",
    padding: 30,
    borderWidth: 10,
    borderColor: "#00acee",
    borderRadius: 500 / 2,
    color: "skyblue",
    fontWeight: "600",
    letterSpacing: 1,
  },
  levelContainer: {
    backgroundColor: "#FFF",
    padding: 30,
    borderWidth: 10,
    borderColor: "#00acee",
    borderRadius: 10,
  },
  catagoryLevel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
