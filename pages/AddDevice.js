
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Divider, Text, TouchableRipple, Button, Modal, Portal } from 'react-native-paper';

const devicesToAdd = [
  {
    id: 1,
    type: 'Light',
    title: 'Bedroom Light',
    icon: require('../assets/icons/light-bulb-on.webp'),
  },
  {
    id: 2,
    type: 'Light',
    title: 'Living Room Light',
    icon: require('../assets/icons/light-bulb-on.webp'),
  },
  {
    id: 3,
    type: 'TV',
    title: 'Samsung TV',
    icon: require('../assets/icons/light-bulb-on.webp'),
  },
  {
    id: 4,
    type: 'TV',
    title: 'LG TV',
    icon: require('../assets/icons/light-bulb-on.webp'),
  },
  {
    id: 5,
    type: 'Speaker',
    title: 'Bose Speaker',
    icon: require('../assets/icons/light-bulb-on.webp'),
  },
  {
    id: 6,
    type: 'Speaker',
    title: 'Sony Speaker',
    icon: require('../assets/icons/light-bulb-on.webp'),
  },
  {
    id: 7,
    type: 'Thermostat',
    title: 'Nest Thermostat',
    icon: require('../assets/icons/light-bulb-on.webp'),
  },
  {
    id: 8,
    type: 'Thermostat',
    title: 'Ecobee Thermostat',
    icon: require('../assets/icons/light-bulb-on.webp'),
  },
  {
    id: 9,
    type: 'Camera',
    title: 'Arlo Camera',
    icon: require('../assets/icons/light-bulb-on.webp'),
  },
  {
    id: 10,
    type: 'Camera',
    title: 'Wyze Camera',
    icon: require('../assets/icons/light-bulb-on.webp'),
  },
];

const AddDevice = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDevicePress = (device) => {
    setSelectedDevice(device);
    setShowModal(true);
  };

  const handleAddDevice = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setShowModal(false);
      }, 2000);
    }, 2000);
  };

  const handleOk = () => {
    setShowModal(false);
  };

  const renderModalContent = () => {
    if (loading) {
      return (
        <View style={styles.modalContent}>
          <ActivityIndicator size="large" color="black" />
        </View>
      );
    } else if (success) {
      return (
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Device successfully paired!</Text>
          <Button mode="contained" onPress={handleOk}>OK</Button>
        </View>
      );
    } else {
      return (
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Do you want to add {selectedDevice?.title}?</Text>
          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={handleAddDevice} style={styles.button}>
              Yes
            </Button>
            <Button mode="outlined" onPress={() => setShowModal(false)} style={styles.button}>
              Cancel
            </Button>
          </View>
        </View>
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {devicesToAdd.map((device) => (
        <TouchableRipple key={device.id} onPress={() => handleDevicePress(device)}>
          <View style={styles.deviceContainer}>
            <Image source={device.icon} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{device.title}</Text>
              <Text style={styles.type}>{device.type}</Text>
            </View>
          </View>
        </TouchableRipple>
      ))}

      <Portal>
        <Modal visible={showModal} onDismiss={() => setShowModal(false)} contentContainerStyle={styles.modalContainer}>
          {renderModalContent()}
        </Modal>
      </Portal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  deviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 14,
    color: 'gray',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  modalContent: {
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    minWidth: 100,
  },
});

export default AddDevice;

