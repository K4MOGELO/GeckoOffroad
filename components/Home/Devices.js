
import React, { useState } from 'react';
import { View, Pressable, Image, Switch, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon, Menu, Surface, Text } from 'react-native-paper';

export default function Devices({ }) {
	const navigation = useNavigation();
	const [showDevicesMenu, setShowDevicesMenu] = useState(false);

	const [devices, setDevices] = useState([
		{
			id: 1,
			name: 'Lights',


			icon: require("../../assets/images/lightsPic.webp"),
			count: 1,
			isSwitchOn: false,
		},
		{
			id: 2,
			name: 'Fan',
			icon: require('../../assets/icons/light-bulb-on.webp'),
			count: 1,
			isSwitchOn: true,
		},
		{
			id: 2,
			name: 'Fan',
			icon: require('../../assets/icons/light-bulb-on.webp'),
			count: 1,
			isSwitchOn: true,
		},
	])


	const handleSwitchChange = (index) => {
		const updatedDevices = [...devices];
		updatedDevices[index] = { ...updatedDevices[index], isSwitchOn: !updatedDevices[index].isSwitchOn };
		setDevices(updatedDevices);
	};

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
						</Pressable>
					}>
					<Menu.Item onPress={() => navigation.navigate('Add Device')} title="Add Device" />
					<Menu.Item onPress={() => { }} title="Remove Device" />
				</Menu>
			</Pressable>

			{devices.map((device, index) => (
				<Surface key={index} style={styles.surface} elevation={4}>
					<View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
						<Image style={styles.tinyLogo} source={device.icon} />
						<View>
							<View style={{ flexDirection: 'column', gap: 8 }}>
								<Text variant="headlineSmall">{device.name}</Text>
								<Text variant="bodyMedium">Devices: {device.count}</Text>
							</View>
						</View>
					</View>
					<Switch value={device.isSwitchOn} onValueChange={() => handleSwitchChange(index)} />
				</Surface>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
	surface: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 5,
		marginVertical: 5,
		// marginHorizontal: 5,

		borderRadius: 25,

		width: "100%",
		alignItems: "center",

	},
	tinyLogo: {
		width: 100,
		height: 100,
		borderRadius: 10,
		margin: 3,
	},
	Devices: {
		justifyContent: "space-between",
		flexDirection: "row",
	}
});

