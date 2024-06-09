import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "./pages/auth/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Icon, PaperProvider } from "react-native-paper";
import LandingPage from "./pages/auth/LandingPage";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home";

import AddDevice from "./pages/AddDevice";
import HomeHeader from "./components/Home/HomeHeader";
import { Apptheme } from "./components/Theme";
import MyAccount from "./pages/Account/MyAccount";
import ContextProvider from "./pages/ContextProvider";
import Settings from "./pages/Settings";
import TestPage from "./components/TestPage";

const Stack = createNativeStackNavigator();

function Landing(navigation) {
  const [userId, setUserId] = useState(null);
  useEffect(
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid);
        // navigation.navigate('Home');
      } else {
      }
    }),
    []
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="LandingPage"
        component={LandingPage}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function HandleHome(navigation) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          header: (props) => <HomeHeader {...props} />,
        }}
        name="Home"
        component={Home}
      />

      <Stack.Screen name="My Account" component={MyAccount} />
      <Stack.Screen name="Settings" component={Settings} />

      <Stack.Screen
        options={{
          headerRight: () => (
            <Icon
              source="magnify"
              // color={MD3Colors.error50}
              size={25}
            />
          ),
        }}
        name="Add Device"
        component={AddDevice}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider theme={Apptheme}>
      <ContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="HandleHome"
              component={HandleHome}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </PaperProvider>
  );
}
