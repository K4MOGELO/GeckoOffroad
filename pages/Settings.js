import React from "react";
import { ScrollView, StyleSheet, View, Alert } from "react-native";
import { Button, Divider, Switch, Text } from "react-native-paper";
import * as Notifications from "expo-notifications";
import TestNotification from "../components/TestPage";

export default function Settings() {
  const [notifications, setNotifications] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleNotifications = async () => {
    setNotifications(!notifications);
    if (!notifications) {
      await scheduleNotification();
    } else {
      await Notifications.cancelAllScheduledNotificationsAsync();
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scheduleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Geecko App",
        body: "You have new notifications!",
      },
      trigger: { seconds: 1 }, // Example: send notification after 5 seconds
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>
        <Divider />
        <TestNotification />
        <View style={styles.option}>
          <Text>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={toggleDarkMode} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <Divider />
        <Button
          style={styles.button}
          icon="account"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Edit Profile
        </Button>
        <Button
          style={styles.button}
          icon="lock"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Change Password
        </Button>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <Divider />
        <Button
          style={styles.button}
          icon="help-circle"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Help & Support
        </Button>
        <Button
          style={styles.button}
          icon="information-outline"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          About
        </Button>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Legal</Text>
        <Divider />
        <Button
          style={styles.button}
          icon="file-document-outline"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Terms & Conditions
        </Button>
        <Button
          style={styles.button}
          icon="shield-lock-outline"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Privacy Policy
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});
