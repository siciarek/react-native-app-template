import React from 'react'
import PropTypes from 'prop-types'
import {Content} from 'native-base'

import MapView from 'react-native-maps'
import {Dimensions} from 'react-native'

const Map = ({location: {latitude, longitude}, markers, delta, moveOnMarkerPress, onPress, onMarkerPress, paths}) => {

    const {width, height} = Dimensions.get('window')
    const aspectRatio = width / height
    const latitudeDelta = delta
    const longitudeDelta = delta * aspectRatio
    const initialRegion = {
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    }
    const strokeColor = '#777'
    const strokeWidth = 2

    return <Content>
      <MapView
        onPress={({nativeEvent}) => onPress(nativeEvent)}
        onMarkerPress={({nativeEvent}) => onMarkerPress(nativeEvent)}
        moveOnMarkerPress={moveOnMarkerPress}
        style={{width, height}}
        initialRegion={initialRegion}
      >
        {
          paths.map((path, key) =>
            <MapView.Polyline geodesic coordinates={path} strokeWidth={strokeWidth} strokeColor={strokeColor} key={key}/>)
        }
        {
          markers.map(({latitude, longitude, draggable = false}, key) =>
            <MapView.Marker draggable={draggable} coordinate={{latitude, longitude}} key={key}/>
          )
        }
      </MapView>
    </Content>
  }

Map.propTypes = {
  onPress: PropTypes.func.isRequired,
  onMarkerPress: PropTypes.func.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }),
  moveOnMarkerPress: PropTypes.bool.isRequired,
  markers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  paths: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  delta: PropTypes.number.isRequired,
}

Map.defaultProps = {
  onPress: event => {
  },
  onMarkerPress: event => {
  },
  location: {
    latitude: 52.0693234,
    longitude: 19.4803112,
  },
  moveOnMarkerPress: true,
  markers: [],
  paths: [],
  delta: 11,
}

export default Map
