
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, IconButton, Surface, Button } from 'react-native-paper';

const Temperature = () => {
	const [roomTemperature, setRoomTemperature] = useState(25);

	const increaseTemperature = () => {
		setRoomTemperature(prevTemperature => prevTemperature + 1);
	};

	const decreaseTemperature = () => {
		setRoomTemperature(prevTemperature => prevTemperature - 1);
	};


	const image = require("../../../assets/images/air-conditioner.webp")
	return (
		<Surface style={styles.surface}>

			<ImageBackground borderRadius={25} style={{ width: "100%", height: "100%" }} source={image} resizeMode="cover" >
				<Card.Content>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
						<Title>Air Conditioner</Title>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
						<Paragraph>Temperature:</Paragraph>
						<Paragraph>{roomTemperature}°C</Paragraph>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
						<Button icon="minus" mode="contained" onPress={decreaseTemperature}>Decrease</Button>
						<Button icon="plus" mode="contained" onPress={increaseTemperature}>Increase</Button>
					</View>
				</Card.Content>
			</ImageBackground>
		</Surface>
	);
};

export default Temperature;

const styles = StyleSheet.create({
	surface: {
		borderRadius: 15,
		elevation: 4, // Add elevation for shadow
		borderRadius: 25,
		width: 300, // Adjust width as needed
		height: 200, // Same as width for square shape
		margin: 10, // Adjust spacing between squares
	},
});

