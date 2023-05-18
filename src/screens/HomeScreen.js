import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Button from "../components/Button";

const HomeScreen = () => {
  const handleButtonPress = () => {
    console.log("Button pressed!");
  };

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
      <Button title="Press Me" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default HomeScreen;
