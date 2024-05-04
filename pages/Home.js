import { Button, ScrollView, StyleSheet, View } from "react-native";
import { auth } from "./auth/firebase";
import { signOut } from "firebase/auth";

import { Divider, Surface, Text } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import Devices from "../components/Home/Devices";
import Controlers from "../components/Home/Controlers";

export default function Home({ navigation }) {
  const user = auth.currentUser;

  function LogOut() {
    signOut(auth).then(() => {

      navigation.navigate('Landing', { screen: 'LandingPage' });


    }).catch((error) => {
      // An error happened.
      console.log(error.Message)
    });
  }
  return (
    <ScrollView style={styles.container}>
      <Controlers />
      <Devices />
    </ScrollView>
  )


}

const styles = StyleSheet.create({
  container: {
    gap: 15,

    margin: 10,
  }
  ,
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

