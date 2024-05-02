import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import LandingPage from './pages/auth/LandingPage';
import Home from './pages/Home';
import { auth } from './pages/auth/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import Flashlight from './pages/flashlight';
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();
import { Text } from 'react-native-paper';






export default function App() {
  const [uid, setUid] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid)
      } else {
        //
        // User is signed out
      }
    });
  }, [])
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {false ? (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Flashlight" component={Flashlight} />
            </>
          ) : (
            <>
              <Stack.Screen name="Landing" options={{
                headerShown: false
              }}
                component={LandingPage} />
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>);

    </PaperProvider>
  )
}

