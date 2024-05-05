import React, { useContext, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import {
  Appbar,
  Avatar,
  Divider,
  IconButton,
  Menu,
  Text,
} from "react-native-paper";
import { AuthContext } from "../../pages/ContextProvider";

export default function HomeHeader({ navigation, route, options, back }) {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Appbar.Header style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, {user?.displayName}</Text>
        <Text style={styles.welcome}>Welcome to your Smart Home</Text>
      </View>
      <View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<IconButton icon="account" size={40} onPress={openMenu} />}
        >
          <Menu.Item
            onPress={() => {
              navigation.navigate("My Account");
            }}
            title="My Account"
          />
          {/* <Menu.Item
            onPress={() => {
              console.log("Option 2 was pressed");
            }}
            title="Profiles"
          /> */}
          <Menu.Item
            onPress={() => {
              navigation.navigate("Settings");
            }}
            title="Settings"
            // disabled
          />
        </Menu>
      </View>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    margin: 3,
    color: "white",
  },
  container: {
    backgroundColor: "#ff6600",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 6,
  },
  userInfo: {
    flexDirection: "column",
    // alignItems: "flex-start",
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white", // You may adjust the color as needed
  },
  welcome: {
    fontSize: 14,
    color: "white", // You may adjust the color as needed
  },
});
