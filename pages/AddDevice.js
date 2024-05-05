import React, { useContext, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import {
  Divider,
  Text,
  TouchableRipple,
  Button,
  Modal,
  Portal,
  IconButton,
  Icon,
} from "react-native-paper";
import { DevicesContext } from "./ContextProvider";
import { useNavigation } from "@react-navigation/native";

const devicesToAdd = [
  {
    id: 1,
    available: true,
    type: "Light",
    name: "FlashLight",
    icon: require("../assets/icons/light-bulb-on.webp"),
    count: 1,
    isSwitchOn: false,
  },
  {
    id: 2,
    type: "Air Conditioner",
    name: "Air Conditioner",
    icon: require("../assets/icons/AirConditioner.png"),
    available: true,
    count: 1,
    isSwitchOn: false,
  },
  {
    id: 3,
    available: false,

    type: "TV",
    name: "Smart Tv",
    title: "Samsung TV",
    icon: require("../assets/icons/SmartTv.png"),
  },
  {
    id: 4,
    available: false,
    type: "Smart Door",
    name: "Door",
    icon: require("../assets/icons/wooden-door.webp"),
    count: 1,
    isSwitchOn: true,
  },
  {
    id: 5,
    type: "speaker",
    available: false,
    name: "Smart Speaker",
    icon: require("../assets/icons/SmartSpeaker.webp"),
    count: 1,
    isSwitchOn: false,
  },
];
const AddDevice = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const navigation = useNavigation();
  const { devices, updateDevices } = useContext(DevicesContext);

  const handleDevicePress = (device) => {
    setPopUp(true);
    setSelectedDevice(device);
    setShowModal(true);
  };

  const handleAddDevice = () => {
    setPopUp(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (selectedDevice && selectedDevice.available) {
        setSuccess(true);
        setTimeout(() => {
          setFailed(false);
          setSuccess(true);
          setLoading(false);
          updateDevices([...devices, selectedDevice]);
        }, 2000);
      } else {
        setSuccess(false);
        setLoading(false);
        setFailed(true);
      }
    }, 2000);
  };

  const handlePairing = () => {
    setLoading(false);

    setSuccess(false);
    setFailed(false);
    setShowModal(false);
  };
  const handleFail = () => {
    setShowModal(false);
  };

  const renderModalContent = () => {
    return (
      <>
        {loading && (
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="black" />
            <Text style={styles.modalText}>Pairing...</Text>
          </View>
        )}
        {success && (
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Device successfully paired!</Text>
            <Button mode="contained" onPress={handlePairing}>
              OK
            </Button>
          </View>
        )}
        {failed && (
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Failed to pair device!</Text>
            <Button mode="contained" onPress={handlePairing}>
              OK
            </Button>
          </View>
        )}
        {popUp && !loading && !success && !failed && (
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Pair with {selectedDevice?.name}?
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                mode="contained"
                onPress={handleAddDevice}
                style={styles.button}
              >
                Pair Device
              </Button>
              <Button
                mode="outlined"
                onPress={() => setShowModal(false)}
                style={styles.button}
              >
                Cancel
              </Button>
            </View>
          </View>
        )}
      </>
    );
  };
  const isDevicePaired = (device) => {
    // Check if the device is already paired
    // You can implement your logic here based on your data structure
    return devices.some((pairedDevice) => pairedDevice.id === device.id);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.addeddevices}>
        {devices[0] && <Text variant="labelSmall">paired: </Text>}
        {devices.map((device, index) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 40,
              padding: 4,
              backgroundColor: "#ffff",
            }}
            key={index}
          >
            <Text variant="labelSmall">{device.name} </Text>
          </View>
        ))}
      </View>

      {devicesToAdd.map((device) => (
        <TouchableRipple
          key={device.id}
          onPress={() => handleDevicePress(device)}
          disabled={isDevicePaired(device)}
        >
          <View
            style={[
              styles.deviceContainer,
              isDevicePaired(device) && styles.devicePaired,
            ]}
          >
            <Image source={device.icon} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{device.name}</Text>
              <Text style={styles.type}>{device.type}</Text>
            </View>
          </View>
        </TouchableRipple>
      ))}
      <Portal>
        <Modal
          visible={showModal}
          onDismiss={() => setShowModal(false)}
          contentContainerStyle={styles.modalContainer}
        >
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  type: {
    fontSize: 14,
    color: "gray",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  modalContent: {
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  button: {
    minWidth: 100,
  },
  devicePaired: {
    backgroundColor: "#ccc", // You can choose any color to indicate paired devices

    display: "none",
  },
  addeddevices: {
    flexDirection: "row",
    alignItems: "center",
    margin: 7,
    gap: 10,
  },
});

export default AddDevice;
