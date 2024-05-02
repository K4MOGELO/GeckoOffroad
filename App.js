import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './pages/auth/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import {
  Appbar,
  Avatar,
  Button,
  MD3LightTheme as DefaultTheme,
  Divider,
  Menu,
  PaperProvider,
  Text,
} from 'react-native-paper';

const Stack = createNativeStackNavigator();
import Blank from './pages/auth/Blank';
import LandingPage from './pages/auth/LandingPage';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Home from './pages/Home';

import { getHeaderTitle } from '@react-navigation/elements';
import { Pressable, StyleSheet, View, ViewBase } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import AddDevice from './pages/AddDevice';

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    "primary": "#ff6600",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(209, 228, 255)",
    "onPrimaryContainer": "rgb(0, 29, 54)",
    "secondary": "rgb(83, 95, 112)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(215, 227, 247)",
    "onSecondaryContainer": "rgb(16, 28, 43)",
    "tertiary": "rgb(107, 87, 120)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(242, 218, 255)",
    "onTertiaryContainer": "rgb(37, 20, 49)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "#FFFFFF",
    "onBackground": "rgb(26, 28, 30)",
    "surface": "#fffff",
    "onSurface": "rgb(26, 28, 30)",
    "surfaceVariant": "rgb(223, 226, 235)",
    "onSurfaceVariant": "rgb(67, 71, 78)",
    "outline": "rgb(115, 119, 127)",
    "outlineVariant": "rgb(195, 199, 207)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(47, 48, 51)",
    "inverseOnSurface": "rgb(241, 240, 244)",
    "inversePrimary": "rgb(158, 202, 255)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(240, 244, 250)",
      "level2": "rgb(233, 240, 248)",
      "level3": "rgb(225, 235, 245)",
      "level4": "rgb(223, 233, 244)",
      "level5": "rgb(218, 230, 242)"
    },
    "surfaceDisabled": "rgba(26, 28, 30, 0.12)",
    "onSurfaceDisabled": "rgba(26, 28, 30, 0.38)",
    "backdrop": "rgba(44, 49, 55, 0.4)"
  },
};

function Landing(navigation) {
  const [userId, setUserId] = useState(null)
  useEffect(
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUserId(uid)

        // navigation.navigate('Home');

        // ...
      } else {
        // User is signed out
        // ...
      }
    })
    , [])

  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="LandingPage" component={LandingPage} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator >

  );
}
function HandleHome(navigation) {

  return (
    <Stack.Navigator >
      <Stack.Screen options={
        {
          header: (props) => <CustomNavigationBar {...props} />,
        }
      } name="Home" component={Home} />
      <Stack.Screen name="AddDevice" component={AddDevice} />
    </Stack.Navigator>

  );
}

function CustomNavigationBar({
  navigation,
  route,
  options,
  back,
}) {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false);

  const title = getHeaderTitle(options, route.name);
  return (
    <Appbar.Header mode='medium'>
      <View style={styles.Header}>
        <View>
          <Text variant="headlineLarge">Hi, Jaden </Text>
          <Text >welcome to your ... </Text>
        </View>
        <View>
          {!back ? (
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Pressable onPress={openMenu}>
                  <Avatar.Image
                    size={43} source={require('./assets/nickiminaj.jpg')} />
                </Pressable>}>
              <Menu.Item
                onPress={() => {
                  console.log('Option 1 was pressed');
                }}
                title="Option 1"
              />
              <Menu.Item
                onPress={() => {
                  console.log('Option 2 was pressed');
                }}
                title="Option 2"
              />
              <Menu.Item
                onPress={() => {
                  console.log('Option 3 was pressed');
                }}
                title="Option 3"
                disabled
              />
            </Menu>
          ) : null
          }

        </View>

      </View>
    </Appbar.Header >
  );
}



export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HandleHome"
            component={HandleHome}
            options={{ headerShown: false }}
          />

          {/*
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ headerShown: false }}
          />
        */}

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider >
  )
}


const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 10,

    alignItems: "stretch",

  },

});


