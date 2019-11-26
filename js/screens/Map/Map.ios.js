import React from 'react';
import {Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const Map = props => {
  return (
    <MapView
      region={{
        latitude: 49.2629178,
        longitude: -123.138583,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
      zoomEnabled={true}
      zoomControlEnabled={true}
      style={{flex: 1}}
      showsCompass={true}>
      <Marker coordinate={{latitude: 49.2629178, longitude: -123.138583}}>
        <Image source={require('../../assets/images/map_pin.png')} />
      </Marker>
    </MapView>
  );
};

export default Map;
