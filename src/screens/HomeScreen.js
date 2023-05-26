import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LaporKorupsiScreen from "./LaporKorupsiScreen";
import LaporTerorisScreen from "./LaporTerorisScreen";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LaporKorupsi" component={LaporKorupsiScreen} />
      <Stack.Screen name="LaporTeroris" component={LaporTerorisScreen} />
    </Stack.Navigator>
  );
};

const Home = () => {
  const navigation = useNavigation();
  const handleLaporKorupsi = () => {
    navigation.navigate("LaporKorupsi");
  };
  const handleLaporTeroris = () => {
    navigation.navigate("LaporTeroris");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icon-no-text.png")}
        style={styles.image}
      />

      <TouchableOpacity style={styles.button} onPress={handleLaporKorupsi}>
        <MaterialIcons name="money-off" size={24} color="white" />
        <Text style={styles.buttonText}>Lapor Korupsi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLaporTeroris}>
        <MaterialIcons name="do-not-step" size={24} color="white" />
        <Text style={styles.buttonText}>Lapor Teroris</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 50,
    backgroundColor: "black",
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default HomeScreen;
