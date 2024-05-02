import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { Icon, IconButton, Menu, Surface, Switch, Text } from "react-native-paper";

export default function Devices({ }) {

	const navigation = useNavigation();
	const [isSwitchOn, setIsSwitchOn] = useState(false);
	const [showDevicesMenu, setShowDevicesMenu] = useState(false);

	return (
		<View>

			<Pressable style={styles.Devices} onPress={() => setShowDevicesMenu(true)}>
				<Text variant="titleMedium">Devices</Text>
				<Menu
					visible={showDevicesMenu}
					onDismiss={() => setShowDevicesMenu(false)}
					anchor={
						<Pressable onPress={() => setShowDevicesMenu(true)}>
							<Icon source="dots-horizontal" size={30} />
						</Pressable>}>
					<Menu.Item onPress={() => { navigation.navigate('AddDevice'); }} title="Add Device" />
					<Menu.Item onPress={() => { }} title="Remove Device" />
				</Menu>
			</Pressable>
			<Surface style={styles.surface} elevation={4}>

				<View style={{ flexDirection: "row", alignItems: "center" }} >
					<Image
						style={styles.tinyLogo}
						source={require('../../assets/icons/light-bulb-on.webp')}
					/>
					<View>

						<View style={{ flexDirection: "column", gap: 8, }}>
							<Text variant="titleLarge" >Lights</Text>
							<Text variant="bodyMedium" >Devices: 1</Text>
						</View>
					</View>
				</View>
				<Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)} />
			</Surface>
		</View >
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
	surface: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 5,
		width: "100%",
		alignItems: "center",

	},
	tinyLogo: {
		width: 100,
		height: 100,
	},
	Devices: {
		justifyContent: "space-between",
		flexDirection: "row",
	}
});

