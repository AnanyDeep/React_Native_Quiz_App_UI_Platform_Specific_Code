import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { Checkbox, Button } from "react-native-paper";

export default function Rules_Screen({ navigation }) {
  const [checked, setChecked] = React.useState(false);

  const startbtn = () => {
    if (checked === true) {
      alert("Confirmed & Navigated");
    } else {
      alert("Please select Checkbox");
    }
  };

  return (
    <View style={styles.mainContainer}>
      {Platform.OS == "web" ? (
        <View style={styles.webContainer}>
          <View style={styles.rulesContainer}>
            <Text style={styles.rulesTxt}>RULES</Text>
          </View>
          <View style={styles.ruleNoContainer}>
            <Text style={styles.ruleNo}>This is rule no 1</Text>
            <Text style={styles.ruleNo}>This is rule no 2</Text>
            <Text style={styles.ruleNo}>This is rule no 3</Text>
            <Text style={styles.ruleNo}>This is rule no 4</Text>
            <Text style={styles.ruleNo}>This is rule no 5</Text>
          </View>
          <View style={styles.checkBtn}>
            <Checkbox
              color="skyblue"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Button color="#00acee" mode="contained" onPress={() => startbtn()}>
              START QUIZ
            </Button>
          </View>
        </View>
      ) : (
        <View>This is on {Platform.OS} </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
  },

  webContainer: {
    backgroundColor: "#FFF",
    paddingHorizontal: 80,
    paddingHorizontal: 100,
    paddingVertical: 30,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: "#00acee",
  },
  rulesContainer: {},
  rulesTxt: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "800",
    color: "#00acee",
    textDecorationLine: "underline",
  },
  ruleNoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  ruleNo: {
    fontSize: 24,
    color: "skyblue",
    marginTop: 10,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  checkBtn: {
    paddingTop: 20,
    flexDirection: "row",
    // justifyContent: "space-between",
  },
});
