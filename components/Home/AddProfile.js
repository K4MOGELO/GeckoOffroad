import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Dialog, Portal, TextInput, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddProfile() {
	const [visible, setVisible] = useState(false);
	const [houseName, setHouseName] = useState('');
	const [additionalInfo, setAdditionalInfo] = useState('');

	const showDialog = () => setVisible(true);
	const hideDialog = () => setVisible(false);

	const handleAddProfile = async () => {
		try {
			// Store the entered house name and additional information into local storage
			await AsyncStorage.setItem('houseName', houseName);
			await AsyncStorage.setItem('additionalInfo', additionalInfo);

			// Clear input fields
			setHouseName('');
			setAdditionalInfo('');

			// Close the dialog
			hideDialog();
		} catch (error) {
			console.error('Error storing data:', error);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.message}>No caravan profile found</Text>
			<Button icon="plus" mode="contained" onPress={showDialog}>
				Add Profile
			</Button>
			<Portal>
				<Dialog visible={visible} onDismiss={hideDialog}>
					<Dialog.Title>Add Caravan Profile</Dialog.Title>
					<Dialog.Content>
						<TextInput
							label="House Name"
							value={houseName}
							onChangeText={text => setHouseName(text)}
						/>
						<TextInput
							label="Additional Info"
							value={additionalInfo}
							onChangeText={text => setAdditionalInfo(text)}
						/>
					</Dialog.Content>
					<Dialog.Actions>
						<Button onPress={handleAddProfile}>Add</Button>
						<Button onPress={hideDialog}>Cancel</Button>
					</Dialog.Actions>
				</Dialog>
			</Portal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	message: {
		fontSize: 20,
		marginBottom: 20,
	},
});
