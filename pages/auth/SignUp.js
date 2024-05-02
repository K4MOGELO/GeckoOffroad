
import { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Switch, TextInput, View } from "react-native";
const logo = require("../../assets/logo.png")
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Text } from 'react-native-paper';

export default function SignUp({ navigation }) {
	const [click, setClick] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


	function CreateAcount() {
		console.log("function run")
		console.log("email: " + email + "\n and password: " + password)
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up 
				const user = userCredential.user;
				// ...
				console.log(user)
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage)

			});
	}



	return (
		<KeyboardAvoidingView style={styles.container}>

			<Image source={logo} style={styles.image} resizeMode='contain' />
			<Text style={styles.title}>Create an account</Text>
			<View style={styles.inputView}>
				<TextInput style={styles.input} placeholder='NAME' value={name} onChangeText={(name) => setName(name)} autoCorrect={false}
					autoCapitalize='none' />
				<TextInput style={styles.input} placeholder='EMAIL' value={email} onChangeText={(email) => setEmail(email)} autoCorrect={false}
					autoCapitalize='none' />

				<TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={(password) => setPassword(password)} autoCorrect={false}
					autoCapitalize='none' />
			</View>
			<View style={styles.rememberView}>
			</View>

			<View style={styles.buttonView}>
				<Pressable style={styles.button} onPress={() => CreateAcount()}>
					<Text style={styles.buttonText}>Create account</Text>
				</Pressable>
			</View>

			<Text style={styles.footerText}>Don't Have An Account?<Text style={styles.signup} onPress={() => navigation.navigate('SignIn')} >  Sign In</Text></Text>


		</KeyboardAvoidingView>
	)
}


const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		paddingTop: 70,
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
		paddingVertical: 40,
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
		backgroundColor: "black",
		height: 45,
		borderColor: "gray",
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
		paddingHorizontal: 50
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
	},
	signup: {
		color: "#ff6900",
		fontSize: 13
	}
})
