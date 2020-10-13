import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";

export default function Header() {
  return (
    <View>
      <Text style={styles.header}>GST Calculation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "blueviolet",
    padding: 18,
    fontWeight: "bold",

    fontSize: 35,
    color: "white",
    paddingLeft: 50,
    borderWidth: 1,

    paddingRight: 83,
  },
});
