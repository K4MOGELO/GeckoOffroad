
import { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Switch, TextInput, View } from "react-native";
const logo = require("../../assets/logo.png")
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Button, HelperText, Text } from 'react-native-paper';
import { TextInput as Input } from 'react-native-paper';

export default function SignIn({ navigation }) {

	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");




	function Login() {
		setIsLoading(true);
		setErrorMessage("");

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in successfully
				const user = userCredential.user;
				console.log("User logged in:", user);
				setIsLoading(false);

				navigation.navigate('HandleHome', { screen: 'Home' });

			})
			.catch((error) => {
				let errorMessage = "An error occurred during login. Please try again.";
				switch (error.code) {
					case "auth/invalid-credential":
						errorMessage = "Invalid email or password.";
						break;

					case "auth/invalid-email":
						errorMessage = "Invalid email address.";
						break;
					case "auth/user-disabled":
						errorMessage = "User account is disabled.";
						break;
					case "auth/user-not-found":
					case "auth/wrong-password":
						errorMessage = "Invalid email or password.";
						break;
					default:
						errorMessage = error.message;
				}
				console.error("Login error:", error);
				setErrorMessage(errorMessage);
				setIsLoading(false);
			});
	}
	return (

		<KeyboardAvoidingView style={styles.container} behavior="height">
			<Image source={logo} style={styles.image} resizeMode='contain' />
			<Text style={styles.title} variant="headlineLarge">Login into your home</Text>
			<HelperText type="error" >
				{errorMessage}
			</HelperText>

			<KeyboardAvoidingView style={styles.inputView}>
				<Input
					inputMode="email"
					label="Email"
					value={email}
					mode="outlined"
					onChangeText={email => setEmail(email)}
				/>
				<Input
					inputMode="text"
					label="Password"
					value={password}
					mode="outlined"
					secureTextEntry={true}
					onChangeText={password => setPassword(password)}
				/>

			</KeyboardAvoidingView >
			<View style={styles.rememberView}>
				<View>
					<Pressable onPress={() => Alert.alert("Forget Password!")}>
						<Text style={styles.forgetText}>Forgot Password?</Text>
					</Pressable>
				</View>
			</View>

			<View style={styles.buttonView}>
				<Button contentStyle={styles.button} labelStyle={styles.buttonText} buttonColor="black" loading={isLoading} mode="contained" onPress={() => Login()}>
					LOGIN
				</Button>

			</View>

			<Text variant="titleLarge" style={styles.footerText}>Don't Have Account?<Text variant="titleLarge" style={styles.signup} onPress={() => navigation.navigate('SignUp')} >  Sign Up</Text></Text>


		</KeyboardAvoidingView>
	)
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
		gap: 15,
		width: "100%",
		paddingHorizontal: 40,
		marginBottom: 5
	},
	input: {
		height: 50,
		paddingHorizontal: 20,
		borderColor: "#ff6900",
		borderWidth: 1,
		borderRadius: 7
	},
	rememberView: {
		width: "100%",
		paddingHorizontal: 50,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		marginBottom: 8
	},
	switch: {
		flexDirection: "row",
		gap: 1,
		justifyContent: "center",
		alignItems: "center"

	},
	rememberText: {
		fontSize: 13
	},
	forgetText: {
		fontSize: 11,
		color: "#ff6900"
	},
	button: {
		height: 45,
		borderWidth: 1,
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
		padding: 3,
	},
	optionsText: {
		textAlign: "center",
		paddingVertical: 10,
		color: "gray",
		fontSize: 13,
		marginBottom: 6
	},
	mediaIcons: {
		flexDirection: "row",
		gap: 15,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 23
	},
	icons: {
		width: 40,
		height: 40,
	},
	footerText: {
		textAlign: "center",
		color: "gray",
		margin: 8,
	},
	signup: {
		color: "#ff6900",
	}
})

