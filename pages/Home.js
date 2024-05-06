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

  const image = require("../assets/insidecaravan.webp");

  const imageTest = require("../assets/images/ExteriorKitchen.jpg");

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
