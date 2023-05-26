import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const LaporanGagalScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MaterialIcons name="cancel" size={100} color="red" />
      <Text>Laporan Gagal Dikirim</Text>
    </View>
  );
};

export default LaporanGagalScreen;
