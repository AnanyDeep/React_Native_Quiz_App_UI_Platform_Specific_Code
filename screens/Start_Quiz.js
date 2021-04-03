import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

export default function Start_Quiz({ navigation }) {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [catagory, setCatagory] = useState(null);

  const moveToPage = () => {
    if (selectedLevel === "Beginner" && catagory === "Python") {
      navigation.navigate("Rules");
    } else {
      alert("Page Under Construction");
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Quiz App",
      headerTitleAlign: "center",
      headerTintColor: "#FFF",
      headerStyle: { backgroundColor: "#2c3e50" },

      headerLeft: () => (
        <View style={{ marginLeft: 10 }}>
          <AntDesign
            name="arrowleft"
            size={30}
            color="#FFF"
            onPress={() => alert("Header Left Pressed")}
          />
        </View>
      ),
      headerRight: () => (
        <View style={{ marginRight: 10 }}>
          <AntDesign
            name="user"
            size={30}
            color="#FFF"
            onPress={() => alert("Header Right Pressed")}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <Picker
          style={styles.picker}
          mode="dropdown"
          selectedValue={selectedLevel}
          onValueChange={(itemValue, itemIndex) => setSelectedLevel(itemValue)}
        >
          <Picker.Item label="Beginner" value="Beginner" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="Expert" value="Expert" />
        </Picker>
      </View>
      <Picker
        style={styles.picker}
        selectedValue={catagory}
        onValueChange={(itemValue, itemIndex) => setCatagory(itemValue)}
      >
        <Picker.Item label="Python" value="Python" />
        <Picker.Item label="JAVA" value="JAVA" />
        <Picker.Item label="C#" value="C#" />
      </Picker>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            moveToPage();
          }}
        >
          <Text style={styles.button}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <StatusBar barStyle="light-content" backgroundColor="teal" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    opacity: 0.8,
  },

  picker: {
    width: 200,
    height: 40,
    marginBottom: 30,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: "#2c3e50",
    color: "#000",
    fontSize: 18,
    backgroundColor: "#FFF",
    fontWeight: "700",
  },
  buttonContainer: {
    flexDirection: "row",
    paddingTop: 20,
    marginBottom: 5,
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    borderRadius: 10,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    borderWidth: 4,
    borderColor: "#2c3e50",
    marginBottom: 20,
    fontWeight: "500",
  },
});
