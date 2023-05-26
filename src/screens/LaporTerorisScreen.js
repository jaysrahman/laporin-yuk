import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const LaporTerorisScreen = ({ navigation }) => {
  const [tempatKejadian, setTempatKejadian] = useState("");
  const [alamatKejadian, setAlamatKejadian] = useState("");
  const [kronologiKejadian, setKronologiKejadian] = useState("");

  const handleKirim = () => {
    if (tempatKejadian && alamatKejadian && kronologiKejadian) {
      // Lakukan tindakan pengiriman data ke server atau penanganan lainnya
      // Di sini Anda dapat menambahkan logika sesuai kebutuhan Anda
      Alert.alert("Terima kasih!", "Laporan Teroris telah dikirim.");
    } else {
      Alert.alert("Error", "Harap lengkapi semua input.");
    }
  };

  return (
    <View style={styles.container}>
      <MaterialIcons
        name="do-not-step"
        size={80}
        color="black"
        style={styles.icon}
      />
      <Text style={styles.title}>Lapor Teroris</Text>
      <TextInput
        style={styles.input}
        placeholder="Tempat Kejadian"
        value={tempatKejadian}
        onChangeText={(text) => setTempatKejadian(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Alamat Kejadian"
        value={alamatKejadian}
        onChangeText={(text) => setAlamatKejadian(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Kronologi Kejadian"
        value={kronologiKejadian}
        onChangeText={(text) => setKronologiKejadian(text)}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleKirim}>
        <Text style={styles.buttonText}>Kirim</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LaporTerorisScreen;
