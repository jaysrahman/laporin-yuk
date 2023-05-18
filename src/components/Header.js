import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "lightblue",
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Header;
