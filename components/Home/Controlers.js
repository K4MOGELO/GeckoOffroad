import { useContext, useState } from "react";
import { ImageBackground, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { DevicesContext } from "../../pages/ContextProvider";
import Temperature from "./favorites/Temperature";
import FlashLight from "./favorites/flashlight";

export default function Controlers() {

	const { devices, updateDevices } = useContext(DevicesContext);

	return (
		<ScrollView horizontal={true} style={styles.container}>

			{devices && devices.some(device => device.type === 'Light' && device.isSwitchOn) && <FlashLight />}
			{devices && devices.some(device => device.type === 'AirConditioner' && device.isSwitchOn) && <Temperature />}

		</ScrollView>
	);
}


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 3,
	},
});
