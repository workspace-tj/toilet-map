import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
            latitude: 35.681262,
            logitude: 139.766403
        }}
      >
        <Marker
            coordinate={{
                latitude: 35.681262,
                logitude: 139.766403
            }}
            title="TokyoStation"
        />
      </MapView>
      <TouchableOpacity
        onPress={() => console.log("トイレ表示")}
      >
        <Text>Show Toilet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapview: {
    ...StyleSheet.absoluteFillObject,
  }
});
