import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Location, MapView, Permissions } from 'expo';

export default class GeoLocationScreen extends React.Component {
  static navigationOptions = {
    title: 'Geolocation'
  };

  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
    latitude: '',
    longitude: '',
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      locationResult: JSON.stringify(location),
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.locationResult === null ?
            <Text>Finding your current location...</Text> :
            this.state.hasLocationPermissions === false ?
              <Text>Location permissions are not granted.</Text> :
              this.state.mapRegion === null ?
                <Text>Map region doesn't exist.</Text> :
                <MapView
                  style={{ alignSelf: 'stretch', height: 300 }}
                  region={this.state.mapRegion}
                  onRegionChange={this._handleMapRegionChange}
                />
        }

        <Text style={styles.locationHeader}>
          Location:
        </Text>
        <Text>
          Latitude: {this.state.latitude}
        </Text>
        <Text>
          Longitude: {this.state.longitude}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  locationHeader: {
    fontWeight: 'bold'
  }
});
