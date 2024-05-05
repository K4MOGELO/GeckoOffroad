import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Avatar, Button, Divider, Text, Title } from "react-native-paper";
import { auth } from "../auth/firebase";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../ContextProvider";

const MyAccount = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  function LogOut() {
    signOut(auth)
      .then(() => {
        navigation.navigate("Landing", { screen: "LandingPage" });
      })
      .catch((error) => {
        // An error happened.
        console.log(error.Message);
      });
  }
  const image = require("../../assets/images/carbg.avif");

  return (
    <View style={{ height: "100%" }}>
      <ImageBackground
        style={styles.container}
        source={image}
        resizeMode="stretch"
      >
        <Avatar.Image
          size={100}
          source={require("../../assets/nickiminaj.jpg")}
          style={styles.avatar}
        />
        <Title variant="headlineSmall" style={styles.title}>
          {user?.displayName}
        </Title>
        <Text variant="headlineLarge" style={styles.email}>
          {user?.email}
        </Text>
        <Button
          mode="contained"
          style={styles.logoutButton}
          onPress={() => LogOut()}
        >
          Logout
        </Button>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  avatar: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  email: {
    marginBottom: 20,
    color: "#ff6600",
  },
  divider: {
    height: 2,
    width: "100%",
    marginVertical: 20,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  logoutButton: {
    marginTop: 20,
    width: "100%",
  },
});

export default MyAccount;
