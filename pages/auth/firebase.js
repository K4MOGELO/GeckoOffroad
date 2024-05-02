// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAGJiUfAmYyuWf8-eLg_Poy-lgPdgioahA",
	authDomain: "cosc-6aaf5.firebaseapp.com",
	projectId: "cosc-6aaf5",
	storageBucket: "cosc-6aaf5.appspot.com",
	messagingSenderId: "860258891736",
	appId: "1:860258891736:web:d3b225a2b23f93a16f64ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);




export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});
