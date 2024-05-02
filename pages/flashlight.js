import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { Camera } from "expo-camera";

const FLASH_MODE = {
  "on": 2,
  "off": 1
}

export default function App() {
  const [flashMode, setFlashMode] = useState(FLASH_MODE.off);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <Text>Loading</Text>;
  }

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
    <View style={styles.container}>
      {flashMode == 2 ?
        <>
          <Button title="Turn OFF Flash" onPress={toggleFlashMode} />
        </> :
        <>
          <Button title="Turn ON Flash" onPress={toggleFlashMode} />
        </>}
      <Camera style={styles.camera} flashMode={flashMode} />
    </View>
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
  }
})
/*
import { Camera, CameraType } from 'expo-camera';
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const FLASH_MODE = {
  "on": 2,
  "off": 1
}

export default function App() {

  const [flashMode, setFlashMode] = useState(FLASH_MODE.off);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();


  if (!permission) {
    // Camera permissions are still loading
    return <Text>Loading</Text>;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const toggleFlashMode = () => {
    setFlashMode(flashMode === FLASH_MODE.on ? FLASH_MODE.off : FLASH_MODE.on)
  }

  return (
    <View style={styles.container}>

      <Button title="Turn on Flash" onPress={toggleFlashMode} />
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    width: 300,
    height: 300,
    display: 'none',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});


*/
