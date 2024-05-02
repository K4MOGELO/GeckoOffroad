
// import { Text } from 'react-native-paper';
//
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';


const logo = require("../../assets/logo.png")
export default function LandingPage({ navigation }) {
	const bgImage = { uri: "https://www.gecko-offroad.co.za/wp-content/uploads/2017/02/Makua-Nature-Reserve-RSA-3.jpg" }
	return (
		<ImageBackground source={bgImage} style={styles.backgroundImage}>
			<View style={styles.container}>
				<Image source={logo} style={styles.logo} resizeMode='contain' />

				<View style={styles.textContainer}>
					<Text style={styles.mainText}>Make your Stay more comfortable in a Smart Caravan</Text>
					<Text style={styles.subText}>Control all comunications in  your Caravan in one app</Text>
				</View>

				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
					<Text style={styles.buttonText}>Get Started</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>

	);
}
/*
*/
const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		height: 190,
		width: 190,
	},
	textContainer: {
		alignItems: 'center',
		marginBottom: 30,
		marginTop: 30,
	},
	mainText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		marginBottom: 10,
	},
	subText: {
		fontSize: 18,
		color: 'white',
		textAlign: 'center',
	},
	button: {
		backgroundColor: '#007bff',
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 30,
		marginTop: 20,
	},
	buttonText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
