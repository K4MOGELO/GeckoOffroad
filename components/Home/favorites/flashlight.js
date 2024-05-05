import { IconButton, Surface, } from "react-native-paper";

import { ImageBackground, Button, StyleSheet, Text, View } from "react-native";

import { Camera } from "expo-camera";
import { useState } from "react";

const FLASH_MODE = {
  "on": 2,
  "off": 1
}

export default function FlashLight() {
  const [flashMode, setFlashMode] = useState(FLASH_MODE.off);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <Text>Loading</Text>;
  }

  const image = require("../../../assets/images/lightsPic.webp")

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }


  const toggleFlashMode = () => {
    setFlashMode(flashMode === FLASH_MODE.on ? FLASH_MODE.off : FLASH_MODE.on)
  }

  return (
    <Surface style={[styles.LightSquare, flashMode == 2 ? { borderColor: "yellow", borderWidth: 1 } : null]}>
      <Camera style={styles.camera} flashMode={flashMode} />
      <ImageBackground borderRadius={25} style={{ width: "100%", height: "100%" }} source={image} resizeMode="cover" >

        <View style={{ margin: 6, flexDirection: "row", justifyContent: "flex-end" }}>
          {flashMode == 2 ? (
            <View>
              <IconButton onPress={toggleFlashMode} icon="power" iconColor="green" size={60} />
              <Text style={{ textAlign: "center" }}>ON</Text>
            </View>
          ) : (
            <View>
              <IconButton onPress={toggleFlashMode} icon="power" iconColor="red" size={60} />
              <Text style={{ textAlign: "center" }}>OFF</Text>
            </View>
          )}
        </View>
      </ImageBackground>

    </Surface >
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: "100%"
  },

  camera: {
    width: 300,
    height: 300,
    display: 'none'
  },
  LightSquare: {
    borderRadius: 25,
    width: 250, // Adjust width as needed
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
})

