import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const LaporanBerhasilScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MaterialIcons name="check-circle" size={100} color="green" />
      <Text>Laporan Berhasil Terkirim</Text>
    </View>
  );
};

export default LaporanBerhasilScreen;
