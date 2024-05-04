
import React, { useContext, useState } from 'react';
import { View, Pressable, Image, Switch, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Button, Icon, IconButton, Menu, Modal, Portal, Surface, Text } from 'react-native-paper';
import { DevicesContext } from '../../pages/ContextProvider';

export default function Devices({ }) {
	const navigation = useNavigation();
	const [showDevicesMenu, setShowDevicesMenu] = useState(false);

	const [showModal, setShowModal] = useState(false);
	const [showRemoveDevice, setshowRemoveDevice] = useState(false);
	const { devices, updateDevices } = useContext(DevicesContext);


	const handleSwitchChange = (index) => {
		const updatedDevices = [...devices];
		updatedDevices[index] = { ...updatedDevices[index], isSwitchOn: !updatedDevices[index].isSwitchOn };
		updateDevices(updatedDevices);
	};


	const removeDeviceById = (id) => {
		// Filter out the device with the provided id
		const updatedDevices = devices.filter(device => device.id !== id);
		// Update the devicesToAdd list with the filtered array
		updateDevices(updatedDevices);
	};


	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const [selectedDevice, setSelectedDevice] = useState(null);

	const handleDevicePress = (device) => {
		setSelectedDevice(device);
		setShowModal(true);
	};

	const handleAddDevice = () => {

		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			console.log(selectedDevice)

			setShowModal(false);
			removeDeviceById(selectedDevice.id)
		}, 2000);
	};


	const renderModalContent = () => {


		return (
			<>
				{loading && (
					<View style={{ alignItems: 'center' }}>
						<ActivityIndicator size="large" color="black" />
						<Text style={{ fontSize: 16, marginBottom: 20, }}>Un Pairing...</Text>
					</View>
				)}
				{!loading && !success && (
					<View style={{ alignItems: 'center' }}>

						<View style={{
							backgroundColor: 'white',
							padding: 20,
							margin: 20,
							borderRadius: 10,
						}}>

							<Text style={{ fontSize: 16, marginBottom: 20, }}>Are you sure you want to remove {selectedDevice?.name}</Text>

							<Button mode="contained" onPress={handleAddDevice} style={{
								minWidth: 100,
							}}>
								UnPair Device
							</Button>
							<Button mode="outlined" onPress={() => setShowModal(false)} style={{
								minWidth: 100,
							}}>
								Cancel
							</Button>
						</View>

					</View>
				)}
			</>
		);
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
					<Menu.Item onPress={() => { setShowDevicesMenu(false); navigation.navigate('Add Device') }} title="Add Device" />
					<Menu.Item onPress={() => { setShowDevicesMenu(false); setshowRemoveDevice(!showRemoveDevice) }} title={showRemoveDevice ? "Remove Device" : "cancel remove"} />
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

					{!showRemoveDevice ?

						<Switch value={device.isSwitchOn} onValueChange={() => handleSwitchChange(index)} />
						: <View style={{ flexDirection: "row", alignItems: "center" }}>
							<Text variant="bodyMedium">unpair device</Text>
							<IconButton
								icon="close"
								size={20}
								onPress={() => handleDevicePress(device)}
							/>
						</View>
					}
					<Portal>
						<Modal visible={showModal} onDismiss={() => setShowModal(false)} contentContainerStyle={styles.modalContainer}>
							{renderModalContent()}
						</Modal>
					</Portal>


				</Surface>
			))}
			<Pressable style={styles.addButton} onPress={() => navigation.navigate('Add Device')}>
				<Text style={styles.addButtonText}>+ add a device</Text>
			</Pressable>
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
	},
	addButton: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
		marginVertical: 10,
		alignSelf: 'center',
	},
	addButtonText: {
		fontSize: 15,
	},
});

