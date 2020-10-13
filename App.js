import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Button,
} from "react-native";
import Calculate from "./component/calculate";
import Header from "./component/header";

export default function App() {
  return (
    <View>
      <Header />
      <Text style={styles.container}>Enter Value to Be checked ...</Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        placeholder="e.g 50000,45589"
      />
      <Text style={styles.container}>Enter GST Percentage ...</Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        placeholder="e.g 20,15%"
      />
      <Calculate />
      <Text style={styles.output}>GST - Amount : 1000</Text>
      <Text style={styles.output}>Net amount : 9000</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingBottom: 0,
    marginLeft: 30,
    fontSize: 20,
  },
  input: {
    borderWidth: 3,
    borderRadius: 10,
    padding: 8,
    margin: 10,
    width: 300,
    height: 50,
    marginLeft: 45,
  },
  button: {
    paddingTop: 50,
  },
  output: {
    padding: 8,
    margin: 10,
    fontSize: 25,
    marginLeft: 50,
    fontWeight: "bold",
  },
  output_1: {
    marginLeft: 180,
    fontSize: 50,
  },
});
