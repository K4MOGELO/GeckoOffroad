
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './auth/firebase';

const MyDevices = [];

export const DevicesContext = createContext(null);
export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);
export const useInventoryData = () => useContext(InventoryContext);
export const useSalesData = () => useContext(SalesContext);


export default function ContextProvider({ children }) {
  const [myDevices, setMyDevices] = useState(MyDevices);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Firebase authentication state listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Set user object in state
    });

    // Clean up function
    return () => unsubscribe();
  }, []);

  const authContextValue = {
    user: user, // Provide user object in context value
  };

  const updateDeviceData = (newData) => {
    setMyDevices(newData);
  };

  const devicesContextValue = {
    devices: myDevices,
    updateDevices: updateDeviceData,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <DevicesContext.Provider value={devicesContextValue}>
        {children}
      </DevicesContext.Provider>
    </AuthContext.Provider>
  );
}

