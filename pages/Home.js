import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { auth } from "./auth/firebase";
import { signOut } from "firebase/auth";

import { Divider, Surface, Text } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import Devices from "../components/Home/Devices";
import Controlers from "../components/Home/Controlers";
import AddProfile from "../components/Home/AddProfile";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Home({ navigation }) {
  const user = auth.currentUser;

  const [houseName, setHouseName] = useState(null);

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const storedHouseName = await AsyncStorage.getItem("houseName");
        if (storedHouseName !== null) {
          setHouseName(storedHouseName);
        }
      } catch (error) {
        console.error("Error retrieving house name:", error);
      }
    };

    retrieveData();
  }, []);

  // Check if houseName exists, if not, render AddProfile component
  if (!houseName) {
    return <AddProfile />;
  }

  const image = require("../assets/insidecaravan.webp");

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <ScrollView>
        <Controlers />
        <Devices />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
