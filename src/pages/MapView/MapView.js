import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View,TouchableOpacity,Text } from "react-native";
import MapView, { Circle, Polyline } from "react-native-maps";
import * as Location from "expo-location";

import styles from "./style"

const MapLocation = () => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } =
        await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation([location.coords]);
    })();
  }, []);

  let listener = null;
  const startTracking = () => {
    listener = Location.watchPositionAsync(
      {
        interval: 1000,
        accuracy: Location.Accuracy.BestForNavigation,
      },
      (position) => console.log(position),
    );
  };

  const stopTracking = () => {
    listener.then((listener) => listener.remove());
  };

  return (
    <View style={styles.container}>
      <MapView
        onPress={() => {}}
        style={styles.map}
        initialRegion={{
          latitude: 37.42597730214824,
          longitude: -122.0856026405,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation
        loadingEnabled
      ></MapView>
            <TouchableOpacity 
            style={styles.buttonLocation}
            onPress={startTracking}>
                <Text style={styles.label}>START</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonLocation}
            onPress={stopTracking}>
                <Text style={styles.label}>STOP</Text>
            </TouchableOpacity>
    </View>
  );
};

export default MapLocation;