import React, { createContext, useState } from 'react';

const MyDevices = [
  {
    id: 1,
    available: true,
    type: 'Light',
    name: 'Bedroom Light',
    icon: require('../assets/icons/light-bulb-on.webp'),
    count: 1,
    isSwitchOn: false,
  },
]


export const DevicesContext = createContext(null);

export default function ContextProvider({ children }) {
  const [myDevices, setMyDevices] = useState(MyDevices);

  const updateDeviceData = (newData) => {
    setMyDevices(newData);
  };

  const contextValue = {
    devices: myDevices,
    updateDevices: updateDeviceData,
  };

  return (
    <DevicesContext.Provider value={contextValue}>
      {children}
    </DevicesContext.Provider>
  );
}
