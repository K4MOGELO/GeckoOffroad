
import { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, Pressable, StyleSheet, View } from "react-native";
const logo = require("../../assets/logo.png");
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { Button, HelperText, Text, TextInput as Input } from 'react-native-paper';

export default function SignUp({ navigation }) {

	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	
		function handleSignUp() {
			setIsLoading(true);
			setErrorMessage("");

			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed up successfully
					const user = userCredential.user;
					console.log("User signed up:", user);

					// Update display name
					updateProfile(user, {
						displayName: name
					}).then(() => {
						console.log("Display name updated successfully");

						// Sign in the user after successful signup
						signInWithEmailAndPassword(auth, email, password)
							.then(() => {
								// User signed in successfully
								console.log("User logged in after sign up");
								setIsLoading(false);

								// Navigate to the appropriate page after signup
								navigation.navigate('HandleHome', { screen: 'Home' });

								// You can add navigation logic here to direct users to the appropriate page after login
							})
							.catch((error) => {
								// Handle sign in error
								console.error("Sign in error after sign up:", error);
								setIsLoading(false);
							});
					})
						.catch((error) => {
							console.error("Error updating display name:", error);
							setErrorMessage("An error occurred during sign up. Please try again.");
							setIsLoading(false);
						});
				})
				.catch((error) => {
					// Handle sign up error
					let errorMessage = "An error occurred during sign up. Please try again.";
					switch (error.code) {
						// Handle specific error cases
					}
					console.error("Sign up error:", error);
					setErrorMessage(errorMessage);
					setIsLoading(false);
				});
		}
return (
		<KeyboardAvoidingView style={styles.container} behavior="height">
			<Image source={logo} style={styles.image} resizeMode='contain' />
			<Text style={styles.title}>Create an Account</Text>
			<HelperText type="error">
				{errorMessage}
			</HelperText>

			<View style={styles.inputView}>
				<Input
					label="Name"
					value={name}
					mode="outlined"
					onChangeText={name => setName(name)}
				/>
				<Input
					label="Email"
					value={email}
					mode="outlined"
					onChangeText={email => setEmail(email)}
				/>
				<Input
					label="Password"
					value={password}
					mode="outlined"
					secureTextEntry={true}
					onChangeText={password => setPassword(password)}
				/>
			</View>

			<View style={styles.buttonView}>
				<Button
					contentStyle={styles.button}
					labelStyle={styles.buttonText}
					buttonColor="black"
					loading={isLoading}
					mode="contained"
					onPress={handleSignUp}
				>
					SIGN UP
				</Button>
			</View>

			<Text style={styles.footerText}>Already have an account? <Text style={styles.signup} onPress={() => navigation.navigate('SignIn')} >Sign In</Text></Text>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		paddingTop: 70,
		height: "100%",
	},
	image: {
		height: 160,
		width: 170
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		textTransform: "uppercase",
		textAlign: "center",
		paddingVertical: 10,
		color: "#ff6900"
	},
	inputView: {
		width: "100%",
		paddingHorizontal: 40,
		marginBottom: 20
	},
	button: {
		height: 45,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center"
	},
	buttonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold"
	},
	buttonView: {
		width: "100%",
		paddingHorizontal: 40,
		marginBottom: 10
	},
	footerText: {
		textAlign: "center",
		color: "gray",
	},
	signup: {
		color: "#ff6900",
		fontSize: 13
	}
});

