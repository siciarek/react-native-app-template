import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Content,
} from 'native-base'

import MapView from 'react-native-maps'
import {Dimensions} from 'react-native'

class Map extends React.Component {

  render() {
    const {location: {latitude, longitude}, markers, delta, moveOnMarkerPress, onPress, onMarkerPress, paths} = this.props
    const {width, height} = Dimensions.get('window')
    const aspectRatio = width / height
    const latitudeDelta = delta
    const longitudeDelta = delta * aspectRatio
    const strokeColor = '#F00'

    return <Content>
      <MapView
        moveOnMarkerPress={moveOnMarkerPress}
        onPress={({nativeEvent}) => onPress(nativeEvent)}
        onMarkerPress={({nativeEvent}) => onMarkerPress(nativeEvent)}
        style={{width, height}}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta,
        }}
      >
        {
          paths.map((path, key) =>
            <MapView.Polyline
              key={key}
              coordinates={path}
              strokeWidth={2}
              strokeColor={strokeColor}
            />
          )
        }
        {
          markers.map(({latitude, longitude, draggable = false}, key) =>
            <MapView.Marker
              id={key}
              draggable={draggable}
              key={key} coordinate={{latitude, longitude}}/>
          )
        }
      </MapView>
    </Content>
  }
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
