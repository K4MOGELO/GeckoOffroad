
import { signOut } from 'firebase/auth';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Divider, Text, Title } from 'react-native-paper';
import { auth } from '../auth/firebase';
import { useNavigation } from '@react-navigation/native';

const MyAccount = () => {

  const navigation = useNavigation();

  function LogOut() {
    signOut(auth).then(() => {
      navigation.navigate('Landing', { screen: 'LandingPage' });
    }).catch((error) => {
      // An error happened.
      console.log(error.Message)
    });
  }

  return (
    <View style={styles.container}>
      <Avatar.Image size={100} source={require('../../assets/nickiminaj.jpg')} style={styles.avatar} />
      <Title style={styles.title}>Kamogelo Sithole</Title>
      <Text style={styles.email}>myemail@example.com</Text>


      <Button mode="contained" style={styles.logoutButton} onPress={() => LogOut()}>
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    marginBottom: 20,
  },
  divider: {
    height: 2,
    width: '100%',
    marginVertical: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  logoutButton: {
    marginTop: 20,
    width: '100%',
  },
});

export default MyAccount;
