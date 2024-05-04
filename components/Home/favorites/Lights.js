import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { Icon, Surface, Text } from "react-native-paper";
import FlashLight, { TestToggleFlashMode } from "./flashlight";

export default function Lights() {

	const navigation = useNavigation();
	const [isLightOn, setLightOn] = useState(false)

	const image = require("../../../assets/images/lightsPic.webp")

	return (

		<FlashLight />
		// <Surface style={[styles.LightSquare, isLightOn ? { borderColor: "yellow", borderWidth: 1 } : null]}>
		// 	<ImageBackground borderRadius={25} style={{ width: "100%", height: "100%" }} source={image} resizeMode="cover" >
		//
		// 		<View style={{ margin: 6, flexDirection: "row", justifyContent: "flex-end", }} >
		// 			<Pressable onPress={() => { TestToggleFlashMode(); setLightOn(!isLightOn) }}>
		// 				{isLightOn ? <><Icon source="power" color="green" size={60} />
		//
		// 					<Text style={{ textAlign: "center" }}>ON</Text>
		// 				</> :
		// 					<>
		// 						<Icon source="power" color="red" size={60} />
		// 						<Text style={{ textAlign: "center" }}>OFF</Text></>
		// 				}
		// 			</Pressable>
		//
		// 		</View>
		//
		// 	</ImageBackground>
		//
		// </Surface>
		//

	)
}


const styles = StyleSheet.create({
	LightSquare: {
		borderRadius: 25,
		width: 300, // Adjust width as needed
		height: 200, // Same as width for square shape
		backgroundColor: 'lightblue', // Adjust color as needed
		margin: 10, // Adjust spacing between squares
	},
	square: {
		borderRadius: 25,
		width: 300, // Adjust width as needed
		height: 200, // Same as width for square shape
		backgroundColor: 'lightblue', // Adjust color as needed
		marginHorizontal: 10, // Adjust spacing between squares
	},
});
