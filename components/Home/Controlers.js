import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ImageBackground, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Icon, Surface, Text } from "react-native-paper"

export default function Controlers() {

	const navigation = useNavigation();
	const [isLightOn, setLightOn] = useState(false)

	const image = require("../../assets/images/lightsPic.webp")
	return (
		<ScrollView horizontal={true} style={styles.container}>

			<Surface style={[styles.LightSquare, isLightOn ? { borderColor: "yellow", borderWidth: 1 } : null]}>
				<ImageBackground borderRadius={25} blurRadius={4} style={{ width: "100%", height: "100%" }} source={image} resizeMode="cover" >
					<Pressable onPress={() => navigation.navigate('AddDevice')} style={{ margin: 6, flexDirection: "row", justifyContent: "space-between", }} >
						<Text variant="titleLarge">Control your lights</Text>
						<Pressable onPress={() => setLightOn(!isLightOn)}>
							{isLightOn ? <><Icon source="power" color="green" size={60} />

								<Text style={{ textAlign: "center" }}>ON</Text>
							</> :
								<>
									<Icon source="power" color="red" size={60} />
									<Text style={{ textAlign: "center" }}>OFF</Text></>
							}
						</Pressable>

					</Pressable>
				</ImageBackground>

			</Surface>
			<View style={styles.square}></View>
			<View style={styles.square}></View>
			<View style={styles.square}></View>
			<View style={styles.square}></View>
			<View style={styles.square}></View>
			{/* Add more square controllers here */}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: 2,
	},
	LightSquare: {
		borderRadius: 25,
		width: 300, // Adjust width as needed
		height: 200, // Same as width for square shape
		backgroundColor: 'lightblue', // Adjust color as needed
		marginHorizontal: 10, // Adjust spacing between squares
	},
	square: {
		borderRadius: 25,
		width: 300, // Adjust width as needed
		height: 200, // Same as width for square shape
		backgroundColor: 'lightblue', // Adjust color as needed
		marginHorizontal: 10, // Adjust spacing between squares
	},
});
